import { showError, showSuccess } from '../../../plugins';
import {updateProfile} from '../../../services/api/auth';
import {UPDATE_USER_SUCCESS, UPDATE_USER_FAILED} from '../../types';
import {setLoading} from '../common';

export const setUpdateSuccess = data => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const setUpdateFailed = error => ({
  type: UPDATE_USER_FAILED,
  payload: error,
});

export const doUpdate = (data, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await updateProfile(data)
    .then(res => {
      dispatch(setUpdateSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Update Success');
      navigation.goBack();
      console.log('RES UPDATE', res);
    })
    .catch(err => {
      dispatch(setUpdateFailed(err.message));
      dispatch(setLoading(false));
      showError(err.message);
      console.log('RES UPDATE FAILED', err);
    });
};
