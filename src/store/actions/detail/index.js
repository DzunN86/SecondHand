import {showError} from '../../../plugins';
import {detailBuyerProduct} from '../../../services/api/buyer';
import { GET_DETAIL_PRODUCT_SUCCESS, GET_DETAIL_PRODUCT_FAIL, GET_DETAIL_PRODUCT_LOADING } from '../../types';

export const setDetailSuccess = data => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload: data,
});

export const setDetailLoading = loading => ({
  type: GET_DETAIL_PRODUCT_LOADING,
  payload: loading,
});

export const setDetailFailed = error => ({
  type: GET_DETAIL_PRODUCT_FAIL,
  payload: error,
});

export const getDetail = () => async dispatch => {
  dispatch(setProductLoading(true));
  await detailBuyerProduct()
    .then(res => {
      dispatch(setDetailSuccess(res.data));
      dispatch(setDetailLoading(false));
    })
    .catch(err => {
      dispatch(setDetailFailed(err.message));
      dispatch(setDetailLoading(false));
      showError(err.message);
    });
};
