import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Gotu', sans-serif;   
    box-sizing: border-box;
    background: ${theme('colors.background')};
    color: ${theme('colors.base')};
  
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight:700;
    margin: 1rem;
  }

  h1 {
    font-size: ${theme('fontSizes.enormous')};
    font-family: 'Syncopate', sans-serif;    
  }

  h2 {
    font-size: ${theme('fontSizes.big')};
    font-family: 'Syncopate', sans-serif;    
  }

  h3 {
    font-size: ${theme('fontSizes.medium')};
  }

  h4 {
    font-size: ${theme('fontSizes.mini')};
  }

  h6 {
    font-size: ${theme('fontSizes.mini')};
    margin: 0.5rem 1rem;
  }

  p {
    margin: 0.5rem 1rem ; 
    font-size: ${theme('fontSizes.small')};
  }

  a {
    font-family: 'Syncopate', sans-serif;    
    font-weight: 700;
    text-decoration: none;
    color: ${theme('colors.accent')};
    font-size: ${theme('fontSizes.small')};
  }
`;
