import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const app = initializeApp({
  projectId: 'chrome-neo-plus',
  // **Note** this is ok to be public as it as its a client-side
  // identifier API key.
  apiKey: 'AIzaSyDFywpu9QsYq-ufSRV72k4QeFxE4Jf8E1M',
});

initializeAppCheck(app, {
  // dashboard:
  // https://www.google.com/recaptcha/admin/site/548087278
  provider: new ReCaptchaV3Provider('6LfuJasgAAAAAPRrldL7pnDABkNm8Vp3ybWr_xNN'),
});

export const functions = getFunctions(app);

connectFunctionsEmulator(functions, 'localhost', 5001);
