import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    font-family: 'Syncopate', sans-serif;    
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 {
    font-weight:700;
    margin: 1rem;
  }

  h1 {
    font-size: ${theme('fontSizes.enormous')};
  }

  h2 {
    font-size: ${theme('fontSizes.big')};
  }

  small {
    font-size: ${theme('fontSizes.mini')};
    display: block;
    margin: 0.5rem 1rem;
  }

  p {
    font-family: 'Gotu', sans-serif;   
    margin: 0.5rem 1rem ; 
  }
`;
