import React from 'react';
import { Container } from './styles';

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>404</h1>
      </div>
      <div>
        <h1>Page Not Found</h1>
        <span>
          <a href="/">Return to HomePage</a>
        </span>
      </div>
    </Container>
  );
};

export default PageNotFound;
