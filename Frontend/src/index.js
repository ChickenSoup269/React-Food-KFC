import React from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './components/Translate/LanguageContext';
import App from '~/App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
