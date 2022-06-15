import * as admin from 'firebase-admin';
import { verifyConfig } from './constants/config';

verifyConfig();

/**
 * This must go first
 */
admin.initializeApp();

// Provide top-level api functions here
export * from './functions/get-apod';
