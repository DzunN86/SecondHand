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

export const doChangePassword = (current_password, new_password, confirm_password, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await changePassword(current_password, new_password, confirm_password)
    .then(res => {
      dispatch(setPasswordSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Update Success');
      navigation.goBack();
      console.log('RES UPDATE', res);
    })
    .catch(err => {
      dispatch(setPasswordFailed(err.response.data.message));
      dispatch(setLoading(false));
      showError(err.response.data.message);
      console.log('RES UPDATE FAILED', err);
    });
};
