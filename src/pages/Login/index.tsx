import React from 'react';

import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import imageBg from '../../assets/Images/loginBg.jpg';
import fullLogo from '../../assets/Images/full-logo.png';
import { Container, FormStyle, LoginContainer } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={imageBg} alt="" />
      <LoginContainer className="col-6 md-8 sm-12">
        <FormStyle>
          <img src={fullLogo} alt="WDG Automation" className="logo" />
          <TextField
            id="standard-basic"
            label="Username"
            // variant="outlined"
            fullWidth
            onChange={text => {
              console.log(text.target.value);
            }}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            // variant="outlined"
            fullWidth
            onChange={text => {
              console.log(text.target.value);
            }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </FormStyle>
      </LoginContainer>
    </Container>
  );
};

export default Login;
