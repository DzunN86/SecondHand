import { showError, showSuccess } from '../../../plugins';
import {register} from '../../../services/api/auth';
import {REGISTER_FAILED, REGISTER_SUCCESS} from '../../types';
import {setLoading} from '../common';

export const setRegisterSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const setRegisterFailed = error => ({
  type: REGISTER_FAILED,
  payload: error,
});

export const doRegister = (data, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await register(data)
    .then(res => {
      dispatch(setRegisterSuccess(res.data));
      navigation.navigate('LoginScreen');
      dispatch(setLoading(false));
      showSuccess('Register Success');
      console.log('RES REGISTER', res.respone);
    })
    .catch(err => {
      dispatch(setRegisterFailed(err.message));
      dispatch(setLoading(false));
      showError(err.message);

      console.log('RES REGISTER FAILED', err.response.data);
    });
};
