import * as admin from 'firebase-admin';

/**
 * This must go first
 */
admin.initializeApp();

// Provide top-level api functions here
export * from './functions/get-apod';
