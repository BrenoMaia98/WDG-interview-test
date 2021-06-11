import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.contai.vc/api', // PRODUÇÃO
  // baseURL: 'https://hom-api.contai.vc/api', // HOMOLOGAÇÃO
  // baseURL: 'http://192.168.0.130:4000/api/', // LOCAL
  timeout: 10000,
  timeoutErrorMessage: 'Conexão instável com o servidor Contaí!',
});

api.defaults.headers.X_APP_VERSION = 'Desktop';
api.defaults.headers.X_APP_DEVICE = navigator.appVersion;

export const setTokenToLocalStorage = (storageToken: string): void => {
  localStorage.setItem('@ContaAi:token', storageToken);
};

export const getTokenFromLocalStorage = (): string => {
  return localStorage.getItem('@ContaAi:token') || '';
};

export const addTokenToRequest = (storageToken?: string): void => {
  const token = storageToken || getTokenFromLocalStorage();
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export default api;
