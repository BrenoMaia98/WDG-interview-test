import styled from 'styled-components';
import { BLACK, GRAY, LIGHTER_GRAY, PRIMARY } from '../../styles/colorPalette';
export const Container = styled.div`
  background-color: ${LIGHTER_GRAY};
  color: ${BLACK};
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    flex: 1;
    height: 100%;
    background-color: ${PRIMARY};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h1 {
      font-size: 30vw;
    }
  }

  div:nth-child(2) {
    flex: 2;
    h1 {
      font-size: 10vw;
    }
  }

  span {
    font-size: max(1rem, 2vw);
  }
`;
