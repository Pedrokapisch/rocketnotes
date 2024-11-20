import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { SignUp } from './pages/SignUp/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp />
    </ThemeProvider>
  </StrictMode>
);
