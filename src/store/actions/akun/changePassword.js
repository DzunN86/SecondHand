import { showError, showSuccess } from '../../../plugins';
import {changePassword} from '../../../services/api/auth';
import {UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILED} from '../../types';
import {setLoading} from '../common';

export const setPasswordSuccess = data => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload: data,
});

export const setPasswordFailed = error => ({
  type: UPDATE_PASSWORD_FAILED,
  payload: error,
});

export const doChangePassword = (data, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await changePassword(data)
    .then(res => {
      dispatch(setPasswordSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Update Success');
      navigation.goBack();
      console.log('RES UPDATE', res);
    })
    .catch(err => {
      dispatch(setPasswordFailed(err.message));
      dispatch(setLoading(false));
      showError(err.message);
      console.log('RES UPDATE FAILED', err);
    });
};
