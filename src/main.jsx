import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AuthProvider } from './hooks/auth.jsx';
import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { Routes } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);