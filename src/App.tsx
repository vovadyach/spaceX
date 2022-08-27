import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Main, Layout } from './shared/components';
import { GlobalStyle } from './shared/styles/globalStyle';
import { initialTheme } from './shared/styles/theme';
import { Home, Launches, LaunchDetails } from './pages';
import { usePreLoader } from './shared/hooks';
import { PreLoader } from './shared/components/PreLoader';

function App() {
  const [isPreloading] = usePreLoader();

  return (
    <ThemeProvider theme={initialTheme}>
      <GlobalStyle />
      {isPreloading ? <PreLoader /> : null}
      <Layout>
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
