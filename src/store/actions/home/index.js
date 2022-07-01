import {showError} from '../../../plugins';
import {getBuyerProduct} from '../../../services/api/buyer';
import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from '../../types';

export const setProductSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const setProductLoading = loading => ({
  type: GET_PRODUCT_LOADING,
  payload: loading,
});

export const setProductFailed = error => ({
  type: GET_PRODUCT_FAIL,
  payload: error,
});

export const getProduct = params => async dispatch => {
  dispatch(setProductLoading(true));
  await getBuyerProduct(params)
    .then(res => {
      dispatch(setProductSuccess(res.data));
      dispatch(setProductLoading(false));
    })
    .catch(err => {
      dispatch(setProductFailed(err.message));
      dispatch(setProductLoading(false));
      showError(err.message);
    });
};
