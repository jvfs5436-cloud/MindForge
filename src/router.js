/**
 * Simple Hash-Based Router
 * Handles SPA navigation with route guards
 */

class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.authGuard = null;
        this.currentUser = null;

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    /**
     * Register a route
     * @param {string} path - Route path (e.g., '/dashboard')
     * @param {function} handler - Function that returns HTML string
     * @param {Object} options - Route options
     */
    register(path, handler, options = {}) {
        this.routes.set(path, { handler, options });
    }

    /**
     * Set authentication guard
     * @param {function} guard - Function that checks if user is authenticated
     */
    setAuthGuard(guard) {
        this.authGuard = guard;
    }

    /**
     * Set current user
     * @param {Object|null} user - Current user object
     */
    setUser(user) {
        this.currentUser = user;
        this.handleRoute();
    }

    /**
     * Navigate to a route
     * @param {string} path - Route path
     */
    navigate(path) {
        window.location.hash = path;
    }

    /**
     * Get current path from hash
     * @returns {string} Current path
     */
    getCurrentPath() {
        const hash = window.location.hash.slice(1) || '/';
        // Extract path without query params
        return hash.split('?')[0];
    }

    /**
     * Get query parameters from hash
     * @returns {URLSearchParams} Query params
     */
    getQueryParams() {
        const hash = window.location.hash.slice(1);
        const queryIndex = hash.indexOf('?');
        if (queryIndex === -1) return new URLSearchParams();
        return new URLSearchParams(hash.slice(queryIndex));
    }

    /**
     * Handle current route
     */
    async handleRoute() {
        const path = this.getCurrentPath();
        const route = this.routes.get(path);

        if (!route) {
            // Default to login or dashboard based on auth state
            if (this.currentUser) {
                this.navigate('/dashboard');
            } else {
                this.navigate('/login');
            }
            return;
        }

        const { handler, options } = route;

        // Check if route requires authentication
        if (options.requiresAuth && !this.currentUser) {
            this.navigate('/login');
            return;
        }

        // Check if route is auth-only (login/register) and user is logged in
        if (options.authOnly && this.currentUser) {
            this.navigate('/dashboard');
            return;
        }

        // Render the route
        this.currentRoute = path;
        const app = document.getElementById('app');

        try {
            const content = await handler(this);
            app.innerHTML = content;

            // Call any post-render hooks
            if (options.onRender) {
                options.onRender(this);
            }

            // Dispatch custom event for route change
            window.dispatchEvent(new CustomEvent('routechange', {
                detail: { path, user: this.currentUser }
            }));
        } catch (error) {
            console.error('Route render error:', error);
            app.innerHTML = `
        <div class="auth-page">
          <div class="card" style="text-align: center;">
            <h2>Erro</h2>
            <p>Ocorreu um erro ao carregar a página.</p>
            <button class="btn btn-primary" onclick="window.location.reload()">Recarregar</button>
          </div>
        </div>
      `;
        }
    }

    /**
     * Initialize router
     */
    init() {
        this.handleRoute();
    }
}

// Export singleton instance
export const router = new Router();
