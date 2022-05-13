import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  } 

  .pc-tablet-only {
    display: block;
    ${media.mobile} {
        display: none;
    }
  }
  .tablet-mobile-only{
    display: none;
    ${media.tablet}{
        display:block;
    }
  }
  .mobile-only {
    display: none;
    ${media.mobile} {
        display: block;
    }
  }
`;
