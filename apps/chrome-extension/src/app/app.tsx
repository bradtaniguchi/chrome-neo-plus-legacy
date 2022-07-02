// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes } from 'react-router-dom';
import { ApodPage } from '@chrome-neo-plus/apod-react';
import { DateTime } from 'luxon';

export function App() {
  return (
    <Routes>
      {/* TODO: update to be lazy loaded later.
      for now just provide the current date so we can see something
      */}
      <Route
        path="/"
        element={<ApodPage date={DateTime.now().toFormat('yyyy-MM-dd')} />}
      />
    </Routes>
  );
}

export default App;
