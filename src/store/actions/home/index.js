import {showError} from '../../../plugins';
import {getBuyerProduct} from '../../../services/api/buyer';
import {getBanner} from '../../../services/api/seller';
import {
  GET_NEXT_PRODUCT_LOADING,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  SET_BANNER,
} from '../../types';
import {setLoading} from '../common';

export const setProductSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const setProductLoading = loading => ({
  type: GET_PRODUCT_LOADING,
  payload: loading,
});
export const setNextProductLoading = loading => ({
  type: GET_NEXT_PRODUCT_LOADING,
  payload: loading,
});

export const setProductFailed = error => ({
  type: GET_PRODUCT_FAIL,
  payload: error,
});

export const setBanner = data => ({
  type: SET_BANNER,
  payload: data,
});

export const getProduct = params => async dispatch => {
  dispatch(setProductLoading(true));
  await getBuyerProduct(`?search=${params?.search}&category_id=${params?.category_id}&status=${params?.status}&page=${params?.page}&per_page=${params?.per_page}`)
    .then(res => {
      dispatch(setProductSuccess(res.data));
      dispatch(setProductLoading(false));
    })
    .catch(err => {
      dispatch(setProductFailed(err.response.message));
      dispatch(setProductLoading(false));
      showError(err.response.message);
    });
};

export const getNextProduct = params => async dispatch => {
  dispatch(setNextProductLoading(true));
  await getBuyerProduct(`?search=${params?.search}&category_id=${params?.category_id}&status=${params?.status}&page=${params?.page}&per_page=${params?.per_page}`)
    .then(res => {
      dispatch(setProductSuccess(res.data));
      dispatch(setNextProductLoading(false));
    })
    .catch(err => {
      dispatch(setProductFailed(err.response.message));
      showError(err.response.message);
      dispatch(setNextProductLoading(false));
    });
};

export const getBanners = () => async dispatch => {
  dispatch(setLoading(true));
  await getBanner()
    .then(res => {
      dispatch(setBanner(res.data));
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};
