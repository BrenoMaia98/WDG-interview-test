import styled from 'styled-components';
import { BLACK, GRAY, LIGHTER_GRAY } from '../../styles/colorPalette';
export const Container = styled.div`
  background-color: ${LIGHTER_GRAY};
  color: ${BLACK};
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
