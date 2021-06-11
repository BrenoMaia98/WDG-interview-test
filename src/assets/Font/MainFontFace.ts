import { css } from 'styled-components';
import SourceSansProBlack from './SourceSansPro-Black.ttf';
import SourceSansProBlackItalic from './SourceSansPro-BlackItalic.ttf';
import SourceSansProBold from './SourceSansPro-Bold.ttf';
import SourceSansProBoldItalic from './SourceSansPro-BoldItalic.ttf';
import SourceSansProExtraLight from './SourceSansPro-ExtraLight.ttf';
import SourceSansProExtraLightItalic from './SourceSansPro-ExtraLightItalic.ttf';
import SourceSansProItalic from './SourceSansPro-Italic.ttf';
import SourceSansProLight from './SourceSansPro-Light.ttf';
import SourceSansProLightItalic from './SourceSansPro-LightItalic.ttf';
import SourceSansProRegular from './SourceSansPro-Regular.ttf';
import SourceSansProSemiBold from './SourceSansPro-SemiBold.ttf';
import SourceSansProSemiBoldItalic from './SourceSansPro-SemiBoldItalic.ttf';

const MainFontFace = css`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src: url(${SourceSansProBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 900;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProBlackItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url(${SourceSansProBold}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 700;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 200;
    src: url(${SourceSansProExtraLight}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 200;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProExtraLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url(${SourceSansProLight}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 300;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(${SourceSansProRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: url(${SourceSansProSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-display: swap;
    font-style: italic;
    src: url(${SourceSansProSemiBoldItalic}) format('truetype');
  }
`;

export default MainFontFace;
