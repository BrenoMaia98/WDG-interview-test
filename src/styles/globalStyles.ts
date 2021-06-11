import { createGlobalStyle } from 'styled-components';
import MainFontFace from '../assets/Font/MainFontFace';

import { BLACK } from './colorPalette';

export default createGlobalStyle`
  ${MainFontFace}


  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    background: white;
    color: ${BLACK};
    font-family:'Source Sans Pro',  sans-serif;
    letter-spacing:.01rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* overflow-x:hidden; */
  }


  h1, h2, h3, h4, h5, h6, strong,p,ul,li {
    font-weight: 400;
    padding:0px;
    margin:0px;
  }

  button, a {
    cursor: pointer;
  }

 


`;
