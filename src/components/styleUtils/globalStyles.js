import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  html, body, input, select, option {
    font-family: 'Arial', sans-serif;
  }
`;
