import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const app = initializeApp({
  projectId: 'chrome-neo-plus',
  // **Note** this is ok to be public as it as its a client-side
  // identifier API key.
  apiKey: 'AIzaSyDFywpu9QsYq-ufSRV72k4QeFxE4Jf8E1M',
});
export const functions = getFunctions(app);
connectFunctionsEmulator(functions, 'localhost', 5001);
