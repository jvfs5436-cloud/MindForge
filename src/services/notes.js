/**
 * Notes Service
 * CRUD operations for notes in Firestore
 */
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    getDocs,
    getDoc,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase.js';

/**
 * Get reference to user's notes collection
 * @param {string} userId - User UID
 * @returns {CollectionReference}
 */
function getNotesCollection(userId) {
    return collection(db, 'users', userId, 'notes');
}

/**
 * Create a new note
 * @param {string} userId - User UID
 * @param {Object} noteData - Note data (title, content, category, type, tags)
 * @returns {Promise<string>} Created note ID
 */
export async function createNote(userId, noteData) {
    const notesRef = getNotesCollection(userId);

    const note = {
        title: noteData.title || 'Sem título',
        content: noteData.content || '',
        category: noteData.category || 'Other',
        type: noteData.type || 'Estudo',
        tags: noteData.tags || [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(notesRef, note);
    return docRef.id;
}

/**
 * Update an existing note
 * @param {string} userId - User UID
 * @param {string} noteId - Note ID
 * @param {Object} noteData - Updated note data
 * @returns {Promise<void>}
 */
export async function updateNote(userId, noteId, noteData) {
    const noteRef = doc(db, 'users', userId, 'notes', noteId);

    const updates = {
        ...noteData,
        updatedAt: serverTimestamp()
    };

    // Remove undefined values
    Object.keys(updates).forEach(key => {
        if (updates[key] === undefined) {
            delete updates[key];
        }
    });

    await updateDoc(noteRef, updates);
}

/**
 * Delete a note
 * @param {string} userId - User UID
 * @param {string} noteId - Note ID
 * @returns {Promise<void>}
 */
export async function deleteNote(userId, noteId) {
    const noteRef = doc(db, 'users', userId, 'notes', noteId);
    await deleteDoc(noteRef);
}

/**
 * Get a single note by ID
 * @param {string} userId - User UID
 * @param {string} noteId - Note ID
 * @returns {Promise<Object|null>} Note object or null if not found
 */
export async function getNote(userId, noteId) {
    const noteRef = doc(db, 'users', userId, 'notes', noteId);
    const docSnap = await getDoc(noteRef);

    if (!docSnap.exists()) {
        return null;
    }

    return {
        id: docSnap.id,
        ...docSnap.data()
    };
}

/**
 * Get all notes for a user with optional filters
 * @param {string} userId - User UID
 * @param {Object} filters - Optional filters (category, type, search)
 * @returns {Promise<Array>} Array of note objects
 */
export async function getNotes(userId, filters = {}) {
    const notesRef = getNotesCollection(userId);
    let q;

    // Build query constraints
    const constraints = [];

    if (filters.category && filters.category !== 'all') {
        constraints.push(where('category', '==', filters.category));
    }

    if (filters.type && filters.type !== 'all') {
        constraints.push(where('type', '==', filters.type));
    }

    // Order by creation date (newest first)
    constraints.push(orderBy('createdAt', 'desc'));

    q = query(notesRef, ...constraints);

    const snapshot = await getDocs(q);
    const notes = [];

    snapshot.forEach(doc => {
        const data = doc.data();
        notes.push({
            id: doc.id,
            ...data,
            // Convert Firestore timestamps to Date objects
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date()
        });
    });

    // Client-side search filter (Firestore doesn't support full-text search)
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return notes.filter(note =>
            note.title.toLowerCase().includes(searchLower) ||
            note.content.toLowerCase().includes(searchLower) ||
            note.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    return notes;
}

/**
 * Get recent notes for AI context
 * @param {string} userId - User UID
 * @param {number} limit - Maximum number of notes to return
 * @returns {Promise<Array>} Array of recent notes
 */
export async function getRecentNotes(userId, limit = 5) {
    const notesRef = getNotesCollection(userId);
    const q = query(notesRef, orderBy('updatedAt', 'desc'));

    const snapshot = await getDocs(q);
    const notes = [];

    snapshot.forEach(doc => {
        if (notes.length < limit) {
            notes.push({
                id: doc.id,
                ...doc.data()
            });
        }
    });

    return notes;
}

// Note categories
export const CATEGORIES = [
    { value: 'Unity', label: 'Unity' },
    { value: 'Unreal', label: 'Unreal Engine' },
    { value: 'Blender', label: 'Blender' },
    { value: 'Game Dev', label: 'Game Dev' },
    { value: 'Other', label: 'Outro' }
];

// Note types
export const TYPES = [
    { value: 'Estudo', label: 'Estudo' },
    { value: 'Implementação', label: 'Implementação' },
    { value: 'Erro', label: 'Erro' },
    { value: 'Decisão', label: 'Decisão' },
    { value: 'Objetivo', label: 'Objetivo' }
];
