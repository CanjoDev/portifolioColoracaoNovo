import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    // font-family: 'Inter', sans-serif;
    transition: all 0.3s ease-in-out;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3 {
    letter-spacing: 0.5px;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
`;
