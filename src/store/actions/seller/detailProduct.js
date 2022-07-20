import {
  GET_DETAIL_SELLER_LOADING,
  GET_DETAIL_SELLER_FAILED,
  GET_DETAIL_SELLER_SUCCESS
} from "../../types";
import { detailProduct } from "../../../services/api/seller";
import { showError } from "../../../plugins";

export const setDetailSellerSuccess = value => ({
  type: GET_DETAIL_SELLER_SUCCESS,
  payload: value,
});

export const setDetailSellerLoading = loading => ({
  type: GET_DETAIL_SELLER_LOADING,
  payload: loading,
});

export const setDetailSellerFailed = error => ({
  type: GET_DETAIL_SELLER_FAILED,
  payload: error
});

export const getDetailSeller = (id) => async dispatch => {
  dispatch(setDetailSellerLoading(true));
  await detailProduct(id)
    .then(res => {
      dispatch(setDetailSellerSuccess(res.data));
      dispatch(setDetailSellerLoading(false));
    })
    .catch(err => {
      dispatch(setDetailSellerFailed(err.response.message));
      dispatch(setDetailSellerLoading(false));
      showError(err.response.message);
    });
};