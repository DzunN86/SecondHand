import {showError} from '../../../plugins';
import {getProfile} from '../../../services/api/auth';
import {GET_USER_SUCCESS, GET_USER_FAILED} from '../../types';
import {setLoading} from '../common';

export const setGetUserSuccess = data => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const setGetUserFailed = error => ({
  type: GET_USER_FAILED,
  payload: error,
});

export const doGetProfile = () => async dispatch => {
  dispatch(setLoading(true));
  await getProfile()
    .then(res => {
      dispatch(setGetUserSuccess(res.data));
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      dispatch(setGetUserFailed(err.response.message));
      showError(err.response.message);
    });
};
