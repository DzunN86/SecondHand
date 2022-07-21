import {showError, showSuccess} from '../../../plugins';
import Axios from '../../../plugins/axios';
import {login} from '../../../services/api/auth';
import {LOGIN_FAILED, LOGIN_SUCCESS, SET_LOGIN_LOADING} from '../../types';

export const setLoginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const setLoginLoading = data => ({
  type: SET_LOGIN_LOADING,
  payload: data,
});

export const setLoginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const doLogin = (email, password, navigation) => async dispatch => {
  dispatch(setLoginLoading(true));
  await login(email, password)
    .then(res => {
      dispatch(setLoginSuccess(res.data));
      Axios.defaults.headers['access_token'] = res.data.access_token;
      navigation.replace('MainApp');
      dispatch(setLoginLoading(false));
      showSuccess('Login Success');
    })
    .catch(err => {
      dispatch(setLoginFailed(err.response.message));
      dispatch(setLoginLoading(false));
      showError(err.response.data?.message || err.response.message);
      console.log('RES LOGIN FAILED', err.response.data);
    });
};
