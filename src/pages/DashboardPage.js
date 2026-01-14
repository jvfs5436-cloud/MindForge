/**
 * Dashboard Page Component
 * Lists all notes with filtering
 */
import { signOut, getCurrentUser } from '../services/auth.js';
import { getNotes, deleteNote, CATEGORIES, TYPES } from '../services/notes.js';
import { router } from '../router.js';

// State
let notes = [];
let filters = {
    category: 'all',
    type: 'all',
    search: ''
};
let loading = true;

export function renderDashboardPage() {
    const user = getCurrentUser();

    return `
    <header class="header">
      <div class="header-logo">🧠 MindForge</div>
      <div class="header-actions">
        <span class="user-email">${user?.email || ''}</span>
        <button class="btn btn-ghost" id="logout-btn">Sair</button>
      </div>
    </header>
    
    <main class="dashboard container">
      <div class="dashboard-header">
        <div>
          <h1 class="dashboard-title">Minhas Anotações</h1>
          <div class="dashboard-stats" id="notes-count"></div>
        </div>
        <button class="btn btn-primary" id="new-note-btn">
          + Nova Anotação
        </button>
      </div>
      
      <div class="filter-bar">
        <input 
          type="search" 
          id="search-input" 
          placeholder="Buscar anotações..."
          value="${filters.search}"
        >
        <select id="category-filter">
          <option value="all">Todas Categorias</option>
          ${CATEGORIES.map(c => `
            <option value="${c.value}" ${filters.category === c.value ? 'selected' : ''}>
              ${c.label}
            </option>
          `).join('')}
        </select>
        <select id="type-filter">
          <option value="all">Todos Tipos</option>
          ${TYPES.map(t => `
            <option value="${t.value}" ${filters.type === t.value ? 'selected' : ''}>
              ${t.label}
            </option>
          `).join('')}
        </select>
      </div>
      
      <div id="notes-container">
        <div class="flex items-center justify-center" style="padding: 4rem;">
          <div class="loader"></div>
        </div>
      </div>
    </main>
  `;
}

function renderNotes() {
    const container = document.getElementById('notes-container');
    const countEl = document.getElementById('notes-count');

    if (loading) {
        container.innerHTML = `
      <div class="flex items-center justify-center" style="padding: 4rem;">
        <div class="loader"></div>
      </div>
    `;
        return;
    }

    countEl.textContent = `${notes.length} anotação${notes.length !== 1 ? 's' : ''}`;

    if (notes.length === 0) {
        container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <h3 class="empty-title">Nenhuma anotação</h3>
        <p class="empty-text">
          ${filters.category !== 'all' || filters.type !== 'all' || filters.search
                ? 'Nenhuma anotação encontrada com esses filtros.'
                : 'Comece criando sua primeira anotação técnica.'}
        </p>
        ${filters.category === 'all' && filters.type === 'all' && !filters.search ? `
          <button class="btn btn-primary" onclick="window.location.hash = '/editor'">
            Criar Anotação
          </button>
        ` : ''}
      </div>
    `;
        return;
    }

    container.innerHTML = `
    <div class="notes-grid">
      ${notes.map(note => renderNoteCard(note)).join('')}
    </div>
  `;
}

function renderNoteCard(note) {
    const categoryClass = note.category.toLowerCase().replace(' ', '');
    const typeClass = note.type.toLowerCase();
    const dateStr = formatDate(note.createdAt);

    return `
    <article class="note-card" data-note-id="${note.id}">
      <div class="note-card-header">
        <h3 class="note-title">${escapeHtml(note.title)}</h3>
      </div>
      <p class="note-preview">${escapeHtml(note.content)}</p>
      <div class="note-meta">
        <span class="badge badge-${categoryClass}">${note.category}</span>
        <span class="badge badge-${typeClass}">${note.type}</span>
        ${note.tags?.slice(0, 2).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        ${note.tags?.length > 2 ? `<span class="tag">+${note.tags.length - 2}</span>` : ''}
        <span class="note-date">${dateStr}</span>
      </div>
    </article>
  `;
}

function formatDate(date) {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short'
    });
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function loadNotes() {
    const user = getCurrentUser();
    if (!user) return;

    loading = true;
    renderNotes();

    try {
        notes = await getNotes(user.uid, filters);
    } catch (error) {
        console.error('Error loading notes:', error);
        notes = [];
    }

    loading = false;
    renderNotes();
}

export function initDashboardPage() {
    // Load notes
    loadNotes();

    // Logout button
    document.getElementById('logout-btn').addEventListener('click', async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Logout error:', error);
        }
    });

    // New note button
    document.getElementById('new-note-btn').addEventListener('click', () => {
        router.navigate('/editor');
    });

    // Search with debounce
    let searchTimeout;
    document.getElementById('search-input').addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filters.search = e.target.value;
            loadNotes();
        }, 300);
    });

    // Category filter
    document.getElementById('category-filter').addEventListener('change', (e) => {
        filters.category = e.target.value;
        loadNotes();
    });

    // Type filter
    document.getElementById('type-filter').addEventListener('change', (e) => {
        filters.type = e.target.value;
        loadNotes();
    });

    // Click on note card
    document.getElementById('notes-container').addEventListener('click', (e) => {
        const card = e.target.closest('.note-card');
        if (card) {
            const noteId = card.dataset.noteId;
            router.navigate(`/editor?id=${noteId}`);
        }
    });
}
