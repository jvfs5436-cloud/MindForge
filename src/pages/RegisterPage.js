/**
 * Register Page Component
 */
import { signUp, getAuthErrorMessage } from '../services/auth.js';
import { router } from '../router.js';

export function renderRegisterPage() {
    return `
    <div class="auth-page">
      <div class="auth-card animate-slideUp">
        <div class="text-center">
          <h1 class="auth-logo">🧠 MindForge</h1>
          <p class="auth-subtitle">Crie sua conta para começar</p>
        </div>
        
        <form id="register-form">
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
              placeholder="Mínimo 6 caracteres"
              autocomplete="new-password"
              minlength="6"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="password-confirm">Confirmar Senha</label>
            <input 
              type="password" 
              id="password-confirm" 
              name="passwordConfirm" 
              placeholder="Digite a senha novamente"
              autocomplete="new-password"
              required
            >
          </div>
          
          <div id="error-message" class="form-error" style="display: none;"></div>
          
          <button type="submit" class="btn btn-primary btn-lg w-full" id="submit-btn">
            Criar Conta
          </button>
        </form>
        
        <p class="form-footer">
          Já tem uma conta? <a href="#/login">Fazer login</a>
        </p>
      </div>
    </div>
  `;
}

export function initRegisterPage() {
    const form = document.getElementById('register-form');
    const errorEl = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = form.email.value.trim();
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        // Validation
        if (!email || !password || !passwordConfirm) {
            errorEl.textContent = 'Preencha todos os campos.';
            errorEl.style.display = 'block';
            return;
        }

        if (password !== passwordConfirm) {
            errorEl.textContent = 'As senhas não coincidem.';
            errorEl.style.display = 'block';
            return;
        }

        if (password.length < 6) {
            errorEl.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            errorEl.style.display = 'block';
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loader loader-sm"></span> Criando conta...';
        errorEl.style.display = 'none';

        try {
            await signUp(email, password);
            // Auth state change will redirect to dashboard
        } catch (error) {
            console.error('Register error:', error);
            errorEl.textContent = getAuthErrorMessage(error.code);
            errorEl.style.display = 'block';

            submitBtn.disabled = false;
            submitBtn.textContent = 'Criar Conta';
        }
    });
}
