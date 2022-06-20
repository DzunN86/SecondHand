import axios from 'axios';
import config from '../../config';

const instance = axios.create({
  baseURL: config.backendApi,
  timeout: 1000,
});

export default instance;
