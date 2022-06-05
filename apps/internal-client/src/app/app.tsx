import { Typography } from '@mui/material';
import { HeaderBar } from '@nx-template/common-react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard-page/dashboard-page';

const NotFoundPage = lazy(
  () => import('./pages/not-found-page/not-found-page')
);

export function App() {
  return (
    <>
      <HeaderBar hideMenu={true} hideHamburger={true}>
        {
          <Typography variant="h5" component="h5">
            internal-client
          </Typography>
        }
      </HeaderBar>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
