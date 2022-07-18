import {showError, showSuccess} from '../../../plugins';
import {updateSellerOrder} from '../../../services/api/seller';
import {UPDATE_ORDER_LOADING, UPDATE_ORDER_SUCCESS} from '../../types';

export const successUpdateOrder = value => ({
  type: UPDATE_ORDER_SUCCESS,
  payload: value,
});

export const setLoadingUpdateOrder = loading => ({
  type: UPDATE_ORDER_LOADING,
  payload: loading,
});

export const pathcOrderSeller = (id_order, status) => async dispatch => {
  dispatch(setLoadingUpdateOrder(true));
  await updateSellerOrder(id_order, status)
    .then(res => {
      dispatch(successUpdateOrder(res.data));
      dispatch(setLoadingUpdateOrder(false));
      showSuccess('Update Order Success');
    })
    .catch(err => {
      dispatch(setLoadingUpdateOrder(false));
      showError(err.message);
    });
};
