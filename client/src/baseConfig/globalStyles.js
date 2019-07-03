import { createGlobalStyle } from 'styled-components';
import colorConfig from './globalColor';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    letter-spacing: .3px;
    font-size: 14px;
    font-weight: 400;
    color: ${colorConfig.textColor};
    background-color: ${colorConfig.bgBody};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
  input {
    outline: 0 none;
  }
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};