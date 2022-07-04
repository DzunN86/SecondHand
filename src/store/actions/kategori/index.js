import {showError} from '../../../plugins';
import { getCategory } from '../../../services/api/seller';
import {
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS,
} from '../../types';
import {setLoading} from '../common';

export const setCategorySuccess = data => ({
  type: GET_CATEGORY_SUCCESS,
  payload: data,
});

export const setCategoryFailed = error => ({
  type: GET_CATEGORY_FAILED,
  payload: error,
});

export const getKategori = () => async dispatch => {
  dispatch(setLoading(true));
  await getCategory()
    .then(res => {
      dispatch(setCategorySuccess(res.data));
      dispatch(setLoading(true));
    })
    .catch(err => {
      dispatch(setCategoryFailed(err.response.data.message));
      dispatch(setLoading(true));
      showError(err.response.data.message);
    });
};
