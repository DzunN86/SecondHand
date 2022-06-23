import { showError, showSuccess } from '../../../plugins';
import {login} from '../../../services/api/auth';
import {LOGIN_FAILED, LOGIN_SUCCESS} from '../../types';
import {setLoading} from '../common';

export const setLoginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const setLoginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const doLogin = (email, password, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await login(email, password)
    .then(res => {
      dispatch(setLoginSuccess(res.data));
      navigation.replace('MainApp');
      dispatch(setLoading(false));
      showSuccess('Login Success');
      console.log('RES LOGIN', res);
    })
    .catch(err => {
      dispatch(setLoginFailed(err.message));
      dispatch(setLoading(false));
      showError(err.message);
      console.log('RES LOGIN FAILED', err);
    });
};
