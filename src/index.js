import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/Index.scss';
import './assets/styles/App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/Auth/authContext';
import { PageProvider } from './context/PageContext';
import { ProfileProvider } from './context/ProfileContext';
import { ResumeProvider } from './context/ResumeContext';

const root = document.getElementById('root');
createRoot(root).render(
  <BrowserRouter basename="/">
    <AuthProvider>
      <ProfileProvider>
        <ResumeProvider>
          <PageProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </PageProvider>
        </ResumeProvider>
      </ProfileProvider>
    </AuthProvider>
  </BrowserRouter>,
);

serviceWorker.unregister();
