/**
 * Authentication Service
 * Handles user authentication with Firebase Auth
 */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase.js';

/**
 * Register a new user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<UserCredential>}
 */
export async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Sign in existing user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<UserCredential>}
 */
export async function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign out current user
 * @returns {Promise<void>}
 */
export async function signOut() {
    return firebaseSignOut(auth);
}

/**
 * Subscribe to authentication state changes
 * @param {function} callback - Callback receiving user object or null
 * @returns {function} Unsubscribe function
 */
export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
}

/**
 * Get current authenticated user
 * @returns {User|null} Current user or null if not authenticated
 */
export function getCurrentUser() {
    return auth.currentUser;
}

/**
 * Translate Firebase auth error codes to user-friendly messages
 * @param {string} code - Firebase error code
 * @returns {string} User-friendly error message
 */
export function getAuthErrorMessage(code) {
    const errorMessages = {
        'auth/email-already-in-use': 'Este email já está em uso.',
        'auth/invalid-email': 'Email inválido.',
        'auth/operation-not-allowed': 'Operação não permitida.',
        'auth/weak-password': 'Senha muito fraca. Use pelo menos 6 caracteres.',
        'auth/user-disabled': 'Esta conta foi desativada.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/invalid-credential': 'Credenciais inválidas.',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    };

    return errorMessages[code] || 'Ocorreu um erro. Tente novamente.';
}
