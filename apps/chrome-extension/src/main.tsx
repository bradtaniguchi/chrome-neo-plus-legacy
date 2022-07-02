import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import App from './app/app';
import { environment } from './environments/environment';

const app = initializeApp({
  projectId: 'chrome-neo-plus',
  apiKey: environment.firebaseApiKey,
});

initializeAppCheck(app, {
  // dashboard:
  // https://www.google.com/recaptcha/admin/site/548087278
  provider: new ReCaptchaV3Provider(environment.reCaptchaKey),
});

export const functions = getFunctions(app);

connectFunctionsEmulator(functions, 'localhost', 5001);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
