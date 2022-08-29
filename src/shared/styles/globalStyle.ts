import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { rem } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    background-color: ${({ theme }) => theme.colors.primary.$100};
    color: ${({ theme }) => theme.colors.text.$500};
    font-family: ${({ theme }) => theme.typography.body.fontFamily}, sans-serif;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.text.$500};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1.size};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    margin-bottom: ${rem(16)};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2.size};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    margin-bottom: ${rem(14)};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3.size};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    margin-bottom: ${rem(12)};
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  table {
    border-spacing: 0;
    width: 100%;
  }

  hr {
    margin: 2rem 0;
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary.$600};
  }

  figure {
    margin: 0;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
  }
`;
