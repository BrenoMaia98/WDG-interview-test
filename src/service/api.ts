import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // FakeAPI
  timeout: 5000,
  timeoutErrorMessage:
    'Parece que sua conexão está instável, por favor tente novamente!',
});

export const setBearerToken = (storageToken: string): void => {
  api.defaults.headers.Authorization = `Bearer ${storageToken}`;
};

export default api;
