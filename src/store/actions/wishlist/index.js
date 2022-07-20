import {showError, showSuccess} from '../../../plugins';
import {addWishlist, deleteWishlist, detailWishlist, getWishlist} from '../../../services';
import {
  GET_DETAILWISHLIST_SUCCESS,
  GET_WISHLIST_LOADING,
  GET_WISHLIST_SUCCESS,
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

export const addItemWishlist = (id_product) => async () => {
  await addWishlist(id_product)
    .then(() => {
      showSuccess('Berhasil menambahkan produk ke wishlist');
    })
    .catch(err => {
      showError(err.message);
    });
};

export const getItemWishlist = () => async dispatch => {
  dispatch(setWishlistLoading(true));
  await getWishlist()
    .then(res => {
      dispatch(setWishlistSuccess(res.data));
      dispatch(setWishlistLoading(false));
    })
    .catch(err => {
      dispatch(setWishlistLoading(false));
      showError(err.message);
    });
};

export const deleteItemWishlist = id => async () => {
  await deleteWishlist(id)
    .then(() => {
      showSuccess('Delete item wishlist success');
    })
    .catch(err => {
      showError(err.message);
    });
};

export const getItemDetailWishlist = id => async dispatch => {
  dispatch(setWishlistLoading(true));
  await detailWishlist(id)
    .then(res => {
      dispatch(setDetailWishlistSuccess(res.data));
      dispatch(setWishlistLoading(false));
    })
    .catch(err => {
      dispatch(setWishlistLoading(false));
      showError(err.message);
    });
};
