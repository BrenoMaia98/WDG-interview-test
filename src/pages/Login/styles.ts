import styled, { css } from 'styled-components';
import {
  BLACK,
  GRAY,
  LIGHTER_GRAY,
  LIGHT_GRAY,
} from '../../styles/colorPalette';
import { cssBreakpoint } from '../../styles/cssBreakpoint';
export const Container = styled.div`
  background-color: ${GRAY};
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    position: absolute;
    height: 100vh;
    width: 100%;
    filter: blur(12px);
  }
`;

export const LoginContainer = styled.div`
  filter: blur(0px);
  background-color: #fff;
  padding: 2rem;

  display: flex;
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
      width: 90%;
    `,
  )};
`;

export const FormStyle = styled.form`
  color: ${BLACK};

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    max-height: 7rem;
    margin: 0px auto;
  }

  > div {
    margin: 1rem 0px;
    width: 100%;
    background-color: ${LIGHT_GRAY};
    flex: 1;
  }
  input {
  }
`;
