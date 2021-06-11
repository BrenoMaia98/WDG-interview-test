import styled, { css } from 'styled-components';
import {
  BLACK,
  LIGHTER_GRAY,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
} from '../../styles/colorPalette';
import { cssBreakpoint } from '../../styles/cssBreakpoint';
export const Container = styled.div`
  background-image: ${` linear-gradient(
    to left top,
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
  text-align: center;
  padding: 1rem;

  overflow-y: scroll;
`;

export const UserContainer = styled.div`
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${LIGHTER_GRAY};

  ${cssBreakpoint.up(
    'md',
    css`
      width: 70%;
    `,
  )};
  ${cssBreakpoint.down(
    'sm',
    css`
      /* height: 80%; */
      width: 100%;
      padding: 0.15rem;
    `,
  )};
  box-shadow: 5px 5px 20px 5px ${BLACK};
  > div {
    padding: 1rem;
    width: 80%;
  }
`;
export const UserProfileImg = styled.img`
  width: max(15vw, 8rem);
  border-radius: max(15vw, 8rem);
  border: 1px solid ${BLACK};
  box-shadow: 2px 2px 5px 2px ${BLACK};
`;

export const Label = styled.h4``;
export const Name = styled.h3``;
