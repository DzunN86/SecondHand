import { showError, showSuccess } from "../../../plugins";
import { getWishlist, detailWishlist } from "../../../services";
import {
  GET_WISHLIST_SUCCESS,
  GET_DETAILWISHLIST_SUCCESS,
  GET_WISHLIST_LOADING,
} from '../../types';

export const setWishlistSuccess = data => ({
  type: GET_WISHLIST_SUCCESS,
  payload: data,
});

export const setDetailWishlistSuccess = data => ({
  type: GET_DETAILWISHLIST_SUCCESS,
  payload: data,
});

export const setWishlistLoading = data => ({
  type: GET_WISHLIST_LOADING,
  payload: data,
});

export const getItemWishlist = () => async dispatch => {
  dispatch(setWishlistLoading(true));
  await getWishlist()
  .then(() => {
    showSuccess('success')
  })
  .catch(err => {
    dispatch(setWishlistLoading(false));
    showError(err.response.data.message);
    console.log(err);
  });
};

export const getItemDetailWishlist = (id) => async dispatch => {
  dispatch(setWishlistLoading(true));
  await detailWishlist(id)
  .then(res => {
    dispatch(setDetailWishlistSuccess(res.data));
    dispatch(setWishlistLoading(false));
  })
  .catch(err => {
    dispatch(setWishlistLoading(false));
    showError(err.response.data.message);
  });
};
