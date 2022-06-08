import * as admin from 'firebase-admin';
import { https, logger } from 'firebase-functions';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const getApod = https.onRequest((request, response) => {
  const prefix = 'apod ';
  logger.info(prefix + 'hello world!', { structuredData: true });
  response.send({
    message: 'Hello from firebase!',
  });
});
