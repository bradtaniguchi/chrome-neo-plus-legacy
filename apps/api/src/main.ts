import * as admin from 'firebase-admin';
import { verifyConfig } from './constants/config';
import { environment } from './environments/environment';

if (!environment.production) {
  // only verify configurations locally, production deployments
  // wont go through otherwise.
  verifyConfig();
}

/**
 * This must go first
 */
admin.initializeApp();

// Provide top-level api functions here
export * from './functions/get-apod';
