import axios from 'axios';
import config from '../../config';
import {Store} from '../../store';

const stores = Store.getState();

const headers = {};

const instance = axios.create({
  baseURL: config.backendApi,
  timeout: 1000,
  headers,
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    const {access_token} = stores.loginReducer.userData;
    if (access_token) {
      config.headers.access_token = access_token;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
