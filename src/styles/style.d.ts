import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        $600: string;
        $500: string;
        $400: string;
        $300: string;
        $200: string;
        $100: string;
      };
      text: {
        $600: string;
        $500: string;
        $400: string;
      };
      error: {
        $600: string;
      };
    };
    typography: {
      h1: {
        size: string;
        lineHeight: string;
      };
      h2: {
        size: string;
        lineHeight: string;
      };
      h3: {
        size: string;
        lineHeight: string;
      };
      body: {
        fontFamily: string;
        lineHeight: string;
      };
    };
  }
}
