/**
 * MindForge - Main Entry Point
 * Technical notes application with AI mentoring for Game Development
 */
import './styles/index.css';
import { router } from './router.js';
import { onAuthChange } from './services/auth.js';
import { renderLoginPage, initLoginPage } from './pages/LoginPage.js';
import { renderRegisterPage, initRegisterPage } from './pages/RegisterPage.js';
import { renderDashboardPage, initDashboardPage } from './pages/DashboardPage.js';
import { renderEditorPage, initEditorPage } from './pages/EditorPage.js';

// Register routes
router.register('/login', () => renderLoginPage(), {
  authOnly: true,
  onRender: () => initLoginPage()
});

router.register('/register', () => renderRegisterPage(), {
  authOnly: true,
  onRender: () => initRegisterPage()
});

router.register('/dashboard', () => renderDashboardPage(), {
  requiresAuth: true,
  onRender: () => initDashboardPage()
});

router.register('/editor', () => renderEditorPage(), {
  requiresAuth: true,
  onRender: () => initEditorPage()
});

// Root route
router.register('/', () => {
  // Redirect based on auth state
  if (router.currentUser) {
    router.navigate('/dashboard');
  } else {
    router.navigate('/login');
  }
  return '<div class="flex items-center justify-center min-h-screen"><div class="loader"></div></div>';
}, {});

// Listen for auth state changes
onAuthChange((user) => {
  console.log('Auth state changed:', user?.email || 'not logged in');
  router.setUser(user);
});

// Initialize app
console.log('🧠 MindForge initialized');
