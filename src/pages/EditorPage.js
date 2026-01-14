/**
 * Editor Page Component
 * Create and edit notes with AI mentor integration
 */
import { getCurrentUser } from '../services/auth.js';
import { createNote, updateNote, deleteNote, getNote, getRecentNotes, CATEGORIES, TYPES } from '../services/notes.js';
import { getMentorFeedback, parseAIResponse } from '../services/ai.js';
import { router } from '../router.js';

// State
let currentNote = null;
let isEditing = false;
let isSaving = false;
let aiResponse = null;
let aiLoading = false;

export function renderEditorPage() {
    const params = router.getQueryParams();
    const noteId = params.get('id');
    isEditing = !!noteId;

    return `
    <header class="header">
      <div class="header-logo">
        <a href="#/dashboard" style="color: inherit; text-decoration: none;">🧠 MindForge</a>
      </div>
      <div class="header-actions">
        <button class="btn btn-ghost" onclick="window.location.hash = '/dashboard'">
          ← Voltar
        </button>
      </div>
    </header>
    
    <main class="editor-page animate-fadeIn">
      <div class="editor-header">
        <h1>${isEditing ? 'Editar Anotação' : 'Nova Anotação'}</h1>
        <div class="editor-actions">
          ${isEditing ? `
            <button class="btn btn-danger" id="delete-btn">Excluir</button>
          ` : ''}
          <button class="btn btn-secondary" id="ai-btn">
            🤖 Pedir Feedback IA
          </button>
          <button class="btn btn-primary" id="save-btn">
            Salvar
          </button>
        </div>
      </div>
      
      <div id="loading-container" style="display: none;">
        <div class="flex items-center justify-center" style="padding: 4rem;">
          <div class="loader"></div>
        </div>
      </div>
      
      <form class="editor-form" id="note-form">
        <div class="form-group">
          <label for="title">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Ex: Implementando sistema de inventário"
            required
          >
        </div>
        
        <div class="editor-row">
          <div class="form-group">
            <label for="category">Categoria</label>
            <select id="category" name="category">
              ${CATEGORIES.map(c => `
                <option value="${c.value}">${c.label}</option>
              `).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label for="type">Tipo</label>
            <select id="type" name="type">
              ${TYPES.map(t => `
                <option value="${t.value}">${t.label}</option>
              `).join('')}
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label for="tags">Tags</label>
          <div class="tags-input-container" id="tags-container">
            <input 
              type="text" 
              id="tags-input" 
              placeholder="Digite e pressione Enter"
            >
          </div>
        </div>
        
        <div class="form-group editor-content">
          <label for="content">Conteúdo</label>
          <textarea 
            id="content" 
            name="content" 
            placeholder="Descreva sua anotação técnica aqui...

Exemplos de conteúdo:
- O que você está estudando ou implementando
- Erros encontrados e como resolveu
- Decisões técnicas e seus motivos
- Objetivos e próximos passos"
          ></textarea>
        </div>
      </form>
      
      <div class="ai-section" id="ai-section" style="display: none;">
        <div class="ai-header">
          <h3 class="ai-title">
            <span class="ai-icon">🤖</span>
            Mentor IA
          </h3>
        </div>
        <div id="ai-content"></div>
      </div>
    </main>
    
    <div id="delete-modal" class="modal-overlay" style="display: none;">
      <div class="modal">
        <h3 class="modal-title">Excluir Anotação?</h3>
        <p>Esta ação não pode ser desfeita. A anotação será removida permanentemente.</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" id="cancel-delete">Cancelar</button>
          <button class="btn btn-danger" id="confirm-delete">Excluir</button>
        </div>
      </div>
    </div>
  `;
}

// Tags state
let tags = [];

function renderTags() {
    const container = document.getElementById('tags-container');
    const input = document.getElementById('tags-input');

    // Remove existing tag elements
    container.querySelectorAll('.tag').forEach(t => t.remove());

    // Add tag elements before input
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.innerHTML = `${escapeHtml(tag)} <button type="button">&times;</button>`;
        tagEl.querySelector('button').addEventListener('click', () => removeTag(tag));
        container.insertBefore(tagEl, input);
    });
}

function addTag(tag) {
    tag = tag.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
        tags.push(tag);
        renderTags();
    }
}

function removeTag(tag) {
    tags = tags.filter(t => t !== tag);
    renderTags();
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function getFormData() {
    const form = document.getElementById('note-form');
    return {
        title: form.title.value.trim(),
        content: form.content.value.trim(),
        category: form.category.value,
        type: form.type.value,
        tags: [...tags]
    };
}

function populateForm(note) {
    if (!note) return;

    const form = document.getElementById('note-form');
    form.title.value = note.title || '';
    form.content.value = note.content || '';
    form.category.value = note.category || 'Other';
    form.type.value = note.type || 'Estudo';

    // Set tags
    tags = note.tags || [];
    renderTags();
}

async function loadNote(noteId) {
    const user = getCurrentUser();
    if (!user || !noteId) return;

    const loadingEl = document.getElementById('loading-container');
    const formEl = document.getElementById('note-form');

    loadingEl.style.display = 'block';
    formEl.style.display = 'none';

    try {
        currentNote = await getNote(user.uid, noteId);
        if (currentNote) {
            populateForm(currentNote);
        } else {
            // Note not found, redirect to new note
            router.navigate('/editor');
        }
    } catch (error) {
        console.error('Error loading note:', error);
    }

    loadingEl.style.display = 'none';
    formEl.style.display = 'flex';
}

async function saveNote() {
    const user = getCurrentUser();
    if (!user) return;

    const data = getFormData();

    if (!data.title) {
        alert('Por favor, adicione um título.');
        return;
    }

    const saveBtn = document.getElementById('save-btn');
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="loader loader-sm"></span> Salvando...';

    try {
        if (isEditing && currentNote?.id) {
            await updateNote(user.uid, currentNote.id, data);
            showToast('Anotação atualizada!', 'success');
        } else {
            const newId = await createNote(user.uid, data);
            currentNote = { id: newId, ...data };
            isEditing = true;
            // Update URL without reload
            window.history.replaceState(null, '', `#/editor?id=${newId}`);
            showToast('Anotação criada!', 'success');
        }
    } catch (error) {
        console.error('Error saving note:', error);
        showToast('Erro ao salvar. Tente novamente.', 'error');
    }

    saveBtn.disabled = false;
    saveBtn.textContent = 'Salvar';
}

async function handleDelete() {
    const user = getCurrentUser();
    if (!user || !currentNote?.id) return;

    const confirmBtn = document.getElementById('confirm-delete');
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<span class="loader loader-sm"></span>';

    try {
        await deleteNote(user.uid, currentNote.id);
        showToast('Anotação excluída.', 'success');
        router.navigate('/dashboard');
    } catch (error) {
        console.error('Error deleting note:', error);
        showToast('Erro ao excluir.', 'error');
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'Excluir';
    }
}

async function getAIFeedback() {
    const user = getCurrentUser();
    if (!user) return;

    const data = getFormData();

    if (!data.content) {
        showToast('Adicione conteúdo para receber feedback.', 'warning');
        return;
    }

    const aiSection = document.getElementById('ai-section');
    const aiContent = document.getElementById('ai-content');
    const aiBtn = document.getElementById('ai-btn');

    aiSection.style.display = 'block';
    aiLoading = true;

    aiContent.innerHTML = `
    <div class="ai-loading">
      <div class="loader"></div>
      <span>Analisando sua anotação...</span>
    </div>
  `;

    aiBtn.disabled = true;
    aiBtn.innerHTML = '<span class="loader loader-sm"></span> Analisando...';

    try {
        // Get recent notes for context
        const recentNotes = await getRecentNotes(user.uid, 5);

        // Get AI feedback
        const response = await getMentorFeedback(data, recentNotes);
        aiResponse = response;

        // Render response
        aiContent.innerHTML = `
      <div class="ai-response animate-fadeIn">
        ${formatAIResponse(response)}
      </div>
    `;
    } catch (error) {
        console.error('AI Error:', error);
        aiContent.innerHTML = `
      <div class="ai-response" style="border-left: 3px solid var(--color-error);">
        <p><strong>Erro:</strong> ${error.message || 'Não foi possível obter feedback da IA.'}</p>
        <p style="font-size: var(--text-sm); color: var(--color-text-muted);">
          Verifique se a chave da API Gemini está configurada corretamente no arquivo .env
        </p>
      </div>
    `;
    }

    aiLoading = false;
    aiBtn.disabled = false;
    aiBtn.innerHTML = '🤖 Pedir Feedback IA';
}

function formatAIResponse(text) {
    // Convert markdown bold to HTML
    let html = text
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
}

function showToast(message, type = 'info') {
    // Check if toast container exists
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}

export function initEditorPage() {
    const params = router.getQueryParams();
    const noteId = params.get('id');

    // Load existing note if editing
    if (noteId) {
        loadNote(noteId);
    }

    // Initialize tags input
    const tagsInput = document.getElementById('tags-input');
    tagsInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag(tagsInput.value);
            tagsInput.value = '';
        }
    });

    // Save button
    document.getElementById('save-btn').addEventListener('click', saveNote);

    // AI button
    document.getElementById('ai-btn').addEventListener('click', getAIFeedback);

    // Delete button (if exists)
    const deleteBtn = document.getElementById('delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            document.getElementById('delete-modal').style.display = 'flex';
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            document.getElementById('delete-modal').style.display = 'none';
        });

        document.getElementById('confirm-delete').addEventListener('click', handleDelete);

        // Close modal on backdrop click
        document.getElementById('delete-modal').addEventListener('click', (e) => {
            if (e.target.id === 'delete-modal') {
                document.getElementById('delete-modal').style.display = 'none';
            }
        });
    }

    // Form submit
    document.getElementById('note-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveNote();
    });
}
