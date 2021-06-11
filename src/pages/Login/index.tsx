import React from 'react';

import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import imageBg from '../../assets/Images/loginBg.jpg';
import fullLogo from '../../assets/Images/full-logo.png';
import { Container, FormStyle, LoginContainer } from './styles';
import AuthenticationServices from '../../service/AuthenticationServices';
import { setBearerToken } from '../../service/api';
import CustomSnackBar, {
  CustomSnackBarProps,
} from '../../components/CustomSnackBar';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';

export interface SignInPasswordForm {
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const history = useHistory();

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

  const handleCloseSnack = () => setSnackProps({ ...snackProps, open: false });
  const [snackProps, setSnackProps] = React.useState<CustomSnackBarProps>({
    autoHideDuration: 6000,
    handleClose: handleCloseSnack,
    message: '',
    open: false,
    status: 'error',
  });

  const [loading, setLoading] = React.useState(false);

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
      newErrors.email = 'Invalid e-mail format!';
      hasError = true;
    }

    if (!formValues.email) {
      newErrors.email = 'Required field!';
      hasError = true;
    }
    if (!formValues.password) {
      newErrors.email = 'Required field!';
      hasError = true;
    }
    setFormErrors(newErrors);

    return !hasError;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      setLoading(true);
      service.authentication
        .login({ ...formValues })
        .then(response => {
          const { token, error } = response.data;
          if (response.status === 200 && token) {
            setBearerToken(token);
            history.push('/users');
          } else {
            setSnackProps({
              ...snackProps,
              open: true,
              message: error as
                | string
                | 'An unexpected error occurred, please try again!',
              status: 'error',
            });
          }
        })
        .catch(err => {
          setSnackProps({
            ...snackProps,
            open: true,
            message: 'An unexpected error occurred, please try again!',
            status: 'error',
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSnackProps({
        ...snackProps,
        open: true,
        message: 'User and/or password are wrong!',
        status: 'error',
      });
    }
  };

  return (
    <Container>
      <img src={imageBg} alt="" />
      <LoginContainer>
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
      <Loading loading={loading} />
      <CustomSnackBar {...snackProps} />
    </Container>
  );
};

export default Login;
