import { AxiosResponse } from 'axios';
import api from './api';

type loginParams = { email: string; password: string };
type loginResponse = { token?: string; error?: string };

const delay = true;
class AuthenticationServices {
  login = ({ email, password }: loginParams) => {
    return api.post<loginParams, AxiosResponse<loginResponse>>(
      `login${delay && '?delay=2'}`,
      {
        email,
        password,
      },
    );
  };
}

export default AuthenticationServices;
