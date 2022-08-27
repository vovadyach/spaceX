import { DefaultTheme } from 'styled-components';

const fontSizeBase = 16;
export const rem = (sizeInPx: number): string =>
  `${sizeInPx / fontSizeBase}rem`;

export const initialTheme: DefaultTheme = {
  colors: {
    primary: {
      $600: '#005288',
      $200: '#b2ddff',
      $100: '#eff8ff',
    },
    text: {
      $600: '#1d2939',
      $500: '#344054',
      $400: '#475467',
      $100: '#e4e7ec',
    },
    error: {
      $600: '#d92d20',
    },
  },
  typography: {
    h1: {
      size: rem(38),
      lineHeight: '1.16',
    },
    h2: {
      size: rem(28),
      lineHeight: '1.14',
    },
    h3: {
      size: rem(24),
      lineHeight: '1.33',
    },
    body: {
      fontFamily: 'Roboto',
      lineHeight: '1.5',
    },
  },
};
