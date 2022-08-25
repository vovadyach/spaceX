import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Footer, Main } from './components';
import { GlobalStyle } from './styles/globalStyle';
import { initialTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={initialTheme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
