import styled from 'styled-components';
import {
  GRAY,
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
  text-align: center;
  padding: 1rem;

  overflow-y: scroll;
`;

export const UsersContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

export const UserView = styled.div`
  display: flex;
  flex-direction: column;
  /* width: max(20vw, 3rem) !important; */
  /* max-height: 30vh; */
  img {
    /* height: max(10vh, 15vw, 3rem) !important; */
    /* width: max(20vh, 20vw, 3rem) !important; */
    flex: 1;
    border: 1px solid ${GRAY};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  margin: 1rem 2rem;
`;

export const Information = styled.div`
  flex-wrap: wrap;
  border: 1px solid ${GRAY};

  display: flex;
  background-color: #fff;
  h3 {
    padding: 0.25rem 0.5rem;
  }
`;
