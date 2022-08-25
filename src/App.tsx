import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Main } from './components';
import { GlobalStyle } from './styles/globalStyle';
import { initialTheme } from './styles/theme';
import { Home, Launches, LaunchDetails } from './pages';

function App() {
  return (
    <ThemeProvider theme={initialTheme}>
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="launches">
            <Route index element={<Launches />} />
            <Route path=":launchId" element={<LaunchDetails />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
