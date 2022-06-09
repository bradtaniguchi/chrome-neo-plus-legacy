import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const app = initializeApp({
  // TODO: fill out later
  // projectId: '',
  // apiKey: '',
});
export const functions = getFunctions(app);
connectFunctionsEmulator(functions, 'localhost', 5001);
