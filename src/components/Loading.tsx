import React from 'react';
import styled, { css } from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import { WHITE } from '../styles/colorPalette';

const LoadingPosition = styled.div<{ loading: boolean }>`
  position: absolute;
  z-index: 20;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  ${({ loading }) => css`
    display: ${loading ? 'flex' : 'none'};
  `};
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  background-color: rgba(4, 4, 4, 0.8);
  h1 {
    margin-right: 1rem;
  }
`;

type LoadingProps = {
  loading: boolean;
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({ loading, message }) => {
  return (
    <>
      <LoadingPosition loading={loading}>
        <h1>{message || 'Loading'}</h1>
        <CircularProgress size={80} />
      </LoadingPosition>
    </>
  );
};

export default Loading;
