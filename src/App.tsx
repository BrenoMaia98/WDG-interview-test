import React from 'react';
import './App.css';
import GlobalStyle from './styles/globalStyles';
import IndexRoutes from './routes/index.routes';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <IndexRoutes />
    </>
  );
}
