import styled from 'styled-components';
import {
  BLACK,
  ERROR,
  GRAY,
  INFO,
  LIGHTER_GRAY,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  WHITE,
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
  height: max(35vh, 3rem) !important;
  img {
    min-height: 20vh;
    width: 20vh;
    margin: auto;
    /* flex: 1; */
    border: 1px solid ${GRAY};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    object-fit: fill;
    border-radius: 500px;
    background-color: ${WHITE};
    box-shadow: 5px 5px 15px 5px ${BLACK};
  }
  margin: 1rem 2rem;
`;

export const UserInformationRow = styled.div`
  flex-wrap: wrap;
  border: 1px solid ${GRAY};

  display: flex;
  background-color: ${WHITE};
  h3 {
    padding: 0.25rem 0.5rem;
  }
`;
export const ShadowBox = styled.div`
  box-shadow: 5px 5px 15px 5px ${BLACK};
`;

export const UserActions = styled(UserInformationRow)`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  div {
    background-color: ${LIGHTER_GRAY};

    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border: 1px solid ${GRAY};
  }

  div:nth-child(1) {
    color: ${ERROR};
  }

  div:nth-child(2) {
    color: ${INFO};
  }
`;

export const Pagination = styled.div`
  bottom: 1rem;
  left: 48%;
  position: absolute;

  display: flex;
  align-items: center;

  background-color: ${PRIMARY_DARK};

  svg {
    cursor: pointer;
  }
`;
