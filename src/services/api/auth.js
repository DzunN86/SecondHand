import axios from '../../plugins/axios';

export const login = async (email, password) => await axios.post('/auth/login', { email: email, password:password });
export const register = async (data) => await axios.post('/auth/register', data);
export const getProfile = async () => await axios.get('/auth/user');
export const updateProfile = async (data) => await axios.put('/auth/user', data);