import * as admin from 'firebase-admin';

/**
 * This must go first
 */
admin.initializeApp();

export * from './functions/get-apod';
