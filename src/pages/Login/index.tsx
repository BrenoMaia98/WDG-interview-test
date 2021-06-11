import React from 'react';

import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import imageBg from '../../assets/Images/loginBg.jpg';
import fullLogo from '../../assets/Images/full-logo.png';
import { Container, FormStyle, LoginContainer } from './styles';
import AuthenticationServices from '../../service/AuthenticationServices';
import { setBearerToken } from '../../service/api';
import CustomSnackBar, { CustomSnackBarProps } from '../../CustomSnackBar';

export interface SignInPasswordForm {
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const [formValues, setFormValues] = React.useState<SignInPasswordForm>({
    password: 'cityslicka',
    email: 'eve.holt@reqres.in',
    // password: '',
    // email: '',
  });
  const [formErrors, setFormErrors] = React.useState<SignInPasswordForm>({
    password: '',
    email: '',
  });
  const [snackProps, setSnackProps] = React.useState<CustomSnackBarProps>({
    autoHideDuration: 6000,
    handleClose: () => setSnackProps({ ...snackProps, open: false }),
    message: '',
    open: false,
    status: 'error',
  });

  const service = { authentication: new AuthenticationServices() };

  const isFormValid = () => {
    const emailRegex = new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    );
    const newErrors: SignInPasswordForm = {
      email: '',
      password: '',
    };

    let hasError = false;

    if (!emailRegex.test(formValues.email)) {
      newErrors.email = 'Formato do e-mail inválido!';
      hasError = true;
    }

    if (!formValues.email) {
      newErrors.email = 'Campo obrigatório!';
      hasError = true;
    }
    if (!formValues.password) {
      newErrors.email = 'Campo obrigatório!';
      hasError = true;
    }
    setFormErrors(newErrors);

    return !hasError;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      service.authentication
        .login({ ...formValues })
        .then(response => {
          const { token, error } = response.data;
          if (response.status === 200 && token) {
            setBearerToken(token);
          } else {
          }
        })
        .catch(err => {});
    }
  };

  return (
    <Container>
      <img src={imageBg} alt="" />
      <LoginContainer className="col-6 md-8 sm-12">
        <FormStyle>
          <img src={fullLogo} alt="WDG Automation" className="logo" />
          <TextField
            label="Username"
            // variant="outlined"
            fullWidth
            onChange={text => {
              if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
              setFormValues({ ...formValues, email: text.target.value });
            }}
            value={formValues.email}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            label="Password"
            type="password"
            // variant="outlined"
            fullWidth
            onChange={text => {
              if (formErrors.password)
                setFormErrors({ ...formErrors, password: '' });
              setFormValues({ ...formValues, password: text.target.value });
            }}
            value={formValues.password}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </FormStyle>
      </LoginContainer>
      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default Login;
