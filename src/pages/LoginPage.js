/**
 * Login Page Component
 */
import { signIn, getAuthErrorMessage } from '../services/auth.js';
import { router } from '../router.js';

export function renderLoginPage() {
    return `
    <div class="auth-page">
      <div class="auth-card animate-slideUp">
        <div class="text-center">
          <h1 class="auth-logo">🧠 MindForge</h1>
          <p class="auth-subtitle">Anotações técnicas para Game Dev</p>
        </div>
        
        <form id="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="seu@email.com"
              autocomplete="email"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="••••••••"
              autocomplete="current-password"
              required
            >
          </div>
          
          <div id="error-message" class="form-error" style="display: none;"></div>
          
          <button type="submit" class="btn btn-primary btn-lg w-full" id="submit-btn">
            Entrar
          </button>
        </form>
        
        <p class="form-footer">
          Não tem uma conta? <a href="#/register">Criar conta</a>
        </p>
      </div>
    </div>
  `;
}

export function initLoginPage() {
    const form = document.getElementById('login-form');
    const errorEl = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = form.email.value.trim();
        const password = form.password.value;

        if (!email || !password) {
            errorEl.textContent = 'Preencha todos os campos.';
            errorEl.style.display = 'block';
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loader loader-sm"></span> Entrando...';
        errorEl.style.display = 'none';

        try {
            await signIn(email, password);
            // Auth state change will redirect to dashboard
        } catch (error) {
            console.error('Login error:', error);
            errorEl.textContent = getAuthErrorMessage(error.code);
            errorEl.style.display = 'block';

            submitBtn.disabled = false;
            submitBtn.textContent = 'Entrar';
        }
    });
}
