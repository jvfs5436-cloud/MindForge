/**
 * Chat Page Component
 * Free conversation with AI Mentor
 */
import { getCurrentUser } from '../services/auth.js';
import { getRecentNotes } from '../services/notes.js';
import { signOut } from '../services/auth.js';
import { router } from '../router.js';

// Chat history state
let messages = [];
let isLoading = false;

// System prompt for chat mode
const CHAT_SYSTEM_PROMPT = `Você é um mentor técnico experiente especializado em Game Development.
Suas áreas de expertise: Unity, Unreal Engine, Blender e mentoria geral de desenvolvimento de jogos.

Diretrizes:
- Seja direto e prático nas respostas
- Evite conselhos genéricos
- Foque em soluções técnicas reais
- Use exemplos de código quando apropriado
- Responda sempre em português brasileiro
- Seja amigável e encorajador

Você pode ajudar com:
- Dúvidas técnicas sobre Unity, Unreal, Blender
- Arquitetura de jogos
- Problemas de código
- Decisões de design
- Carreira em game dev
- Qualquer assunto relacionado a desenvolvimento de jogos`;

export function renderChatPage() {
    const user = getCurrentUser();

    return `
    <header class="header">
      <div class="header-logo">
        <a href="#/dashboard" style="color: inherit; text-decoration: none;">🧠 MindForge</a>
      </div>
      <div class="header-actions">
        <a href="#/dashboard" class="btn btn-ghost">📝 Anotações</a>
        <span class="user-email">${user?.email || ''}</span>
        <button class="btn btn-ghost" id="logout-btn">Sair</button>
      </div>
    </header>
    
    <main class="chat-page">
      <div class="chat-container">
        <div class="chat-messages" id="chat-messages">
          <div class="chat-welcome animate-fadeIn">
            <div class="chat-welcome-icon">🤖</div>
            <h2>Mentor IA</h2>
            <p>Olá! Sou seu mentor técnico em Game Dev. Pode me perguntar qualquer coisa sobre Unity, Unreal, Blender ou desenvolvimento de jogos em geral.</p>
            <div class="chat-suggestions">
              <button class="suggestion-btn" data-msg="Como estruturar um sistema de inventário em Unity?">
                💡 Sistema de inventário
              </button>
              <button class="suggestion-btn" data-msg="Quais são as melhores práticas para otimização de jogos?">
                ⚡ Otimização de jogos
              </button>
              <button class="suggestion-btn" data-msg="Me explique o padrão State Machine para IA de inimigos">
                🎮 State Machine para IA
              </button>
            </div>
          </div>
        </div>
        
        <form class="chat-input-form" id="chat-form">
          <div class="chat-input-container">
            <textarea 
              id="chat-input" 
              placeholder="Digite sua pergunta..."
              rows="1"
            ></textarea>
            <button type="submit" class="btn btn-primary chat-send-btn" id="send-btn">
              <span class="send-icon">➤</span>
            </button>
          </div>
        </form>
      </div>
    </main>
    
    <style>
      .chat-page {
        flex: 1;
        display: flex;
        flex-direction: column;
        max-width: 900px;
        margin: 0 auto;
        width: 100%;
        height: calc(100vh - 65px);
      }
      
      .chat-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: var(--space-4);
        gap: var(--space-4);
        overflow: hidden;
      }
      
      .chat-messages {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        padding-right: var(--space-2);
      }
      
      .chat-welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--space-8);
        flex: 1;
      }
      
      .chat-welcome-icon {
        font-size: 4rem;
        margin-bottom: var(--space-4);
      }
      
      .chat-welcome h2 {
        margin-bottom: var(--space-2);
      }
      
      .chat-welcome p {
        max-width: 500px;
        margin-bottom: var(--space-6);
      }
      
      .chat-suggestions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
        justify-content: center;
      }
      
      .suggestion-btn {
        background: var(--color-bg-tertiary);
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-full);
        font-size: var(--text-sm);
        cursor: pointer;
        transition: all var(--transition-fast);
      }
      
      .suggestion-btn:hover {
        background: var(--color-bg-hover);
        border-color: var(--color-accent);
        color: var(--color-text-primary);
      }
      
      .chat-message {
        display: flex;
        gap: var(--space-3);
        animation: slideUp var(--transition-base) ease-out;
      }
      
      .chat-message.user {
        flex-direction: row-reverse;
      }
      
      .chat-avatar {
        width: 36px;
        height: 36px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text-lg);
        flex-shrink: 0;
      }
      
      .chat-message.assistant .chat-avatar {
        background: linear-gradient(135deg, var(--color-accent), #ec4899);
      }
      
      .chat-message.user .chat-avatar {
        background: var(--color-bg-tertiary);
      }
      
      .chat-bubble {
        max-width: 80%;
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        line-height: 1.6;
      }
      
      .chat-message.assistant .chat-bubble {
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
      }
      
      .chat-message.user .chat-bubble {
        background: var(--color-accent);
        color: white;
      }
      
      .chat-bubble p {
        margin-bottom: var(--space-3);
        color: inherit;
      }
      
      .chat-bubble p:last-child {
        margin-bottom: 0;
      }
      
      .chat-bubble code {
        background: rgba(0,0,0,0.2);
        padding: 0.1em 0.3em;
        border-radius: var(--radius-sm);
        font-size: 0.9em;
      }
      
      .chat-bubble pre {
        background: var(--color-bg-primary);
        padding: var(--space-3);
        border-radius: var(--radius-md);
        overflow-x: auto;
        margin: var(--space-3) 0;
      }
      
      .chat-bubble pre code {
        background: none;
        padding: 0;
      }
      
      .chat-input-form {
        flex-shrink: 0;
      }
      
      .chat-input-container {
        display: flex;
        gap: var(--space-2);
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-2);
      }
      
      .chat-input-container:focus-within {
        border-color: var(--color-accent);
      }
      
      #chat-input {
        flex: 1;
        background: transparent;
        border: none;
        resize: none;
        padding: var(--space-2);
        max-height: 150px;
        font-family: var(--font-sans);
      }
      
      #chat-input:focus {
        outline: none;
        box-shadow: none;
      }
      
      .chat-send-btn {
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-md);
      }
      
      .send-icon {
        font-size: var(--text-lg);
      }
      
      .typing-indicator {
        display: flex;
        gap: 4px;
        padding: var(--space-4);
      }
      
      .typing-indicator span {
        width: 8px;
        height: 8px;
        background: var(--color-text-muted);
        border-radius: 50%;
        animation: typing 1.4s infinite;
      }
      
      .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
      .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
      
      @keyframes typing {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-4px); }
      }
      
      @media (max-width: 768px) {
        .chat-bubble {
          max-width: 90%;
        }
        
        .chat-suggestions {
          flex-direction: column;
        }
      }
    </style>
  `;
}

function renderMessages() {
    const container = document.getElementById('chat-messages');

    if (messages.length === 0) {
        return; // Keep welcome screen
    }

    container.innerHTML = messages.map(msg => `
    <div class="chat-message ${msg.role}">
      <div class="chat-avatar">${msg.role === 'user' ? '👤' : '🤖'}</div>
      <div class="chat-bubble">${formatMessage(msg.content)}</div>
    </div>
  `).join('');

    if (isLoading) {
        container.innerHTML += `
      <div class="chat-message assistant">
        <div class="chat-avatar">🤖</div>
        <div class="chat-bubble">
          <div class="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
    }

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function formatMessage(text) {
    // Convert markdown to HTML
    let html = text
        // Code blocks
        .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Bold
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
}

async function sendMessage(content) {
    const user = getCurrentUser();
    if (!user || !content.trim()) return;

    // Add user message
    messages.push({ role: 'user', content: content.trim() });
    renderMessages();

    // Clear input
    const input = document.getElementById('chat-input');
    input.value = '';
    input.style.height = 'auto';

    // Set loading
    isLoading = true;
    renderMessages();

    const sendBtn = document.getElementById('send-btn');
    sendBtn.disabled = true;

    try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        // Get recent notes for context
        let notesContext = '';
        try {
            const recentNotes = await getRecentNotes(user.uid, 3);
            if (recentNotes.length > 0) {
                notesContext = '\n\n[Contexto - Notas recentes do usuário:\n' +
                    recentNotes.map(n => `- ${n.title} (${n.category})`).join('\n') + ']';
            }
        } catch (e) {
            // Ignore notes error
        }

        // Build conversation history for API
        const conversationHistory = [
            { role: 'user', parts: [{ text: CHAT_SYSTEM_PROMPT + notesContext }] },
            { role: 'model', parts: [{ text: 'Entendido! Estou pronto para ajudar com suas dúvidas sobre game development. Como posso ajudar?' }] }
        ];

        // Add previous messages (last 10 for context)
        const recentMessages = messages.slice(-10);
        for (const msg of recentMessages) {
            conversationHistory.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: conversationHistory,
                    generationConfig: {
                        temperature: 0.8,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 2048
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error('Erro na API');
        }

        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Desculpe, não consegui processar sua pergunta.';

        // Add AI response
        messages.push({ role: 'assistant', content: aiText });

    } catch (error) {
        console.error('Chat error:', error);
        messages.push({
            role: 'assistant',
            content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Verifique sua conexão e tente novamente.'
        });
    }

    isLoading = false;
    sendBtn.disabled = false;
    renderMessages();
}

export function initChatPage() {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');

    // Auto-resize textarea
    input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 150) + 'px';
    });

    // Submit on Enter (Shift+Enter for new line)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });

    // Form submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage(input.value);
    });

    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.dataset.msg);
        });
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Logout error:', error);
        }
    });
}
