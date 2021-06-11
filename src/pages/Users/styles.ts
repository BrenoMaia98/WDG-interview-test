import styled from 'styled-components';
import {
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
} from '../../styles/colorPalette';
export const Container = styled.div`
  background-image: ${` linear-gradient(
    to right top,
    ${PRIMARY_LIGHT},
    #72b9d4,
    #59b4c7,
    #43aeb8,
    #32a8a5,
    #2ca39e,
    #279f98,
    ${PRIMARY},
    #219a91,
    #219596,
    #299099,
    #348b9a,
    ${PRIMARY_DARK}
  )`};
  flex: 1;
  height: 100vh;
`;
