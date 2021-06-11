import api from './api';

type loginParams = { emailOrCPF: string; password: string };

class AuthenticationServices {
  login = ({ emailOrCPF, password }: loginParams) => {
    return api.post('login', {
      email: emailOrCPF,
      password: password,
    });
  };
}

export default AuthenticationServices;
