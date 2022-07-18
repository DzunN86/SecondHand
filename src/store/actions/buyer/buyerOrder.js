import {showError, showSuccess} from '../../../plugins';
import {
  deleteBuyerOrder,
  detailBuyerOrder,
  getBuyerOrder,
  updateBuyerOrder,
} from '../../../services';
import {
  BUYER_ORDER_LOADING,
  GET_BUYER_ORDER_FAILED,
  GET_BUYER_ORDER_SUCCESS,
  GET_DETAIL_BUYER_ORDER_SUCCESS,
} from '../../types';

export const setBuyerOrderSuccess = data => ({
  type: GET_BUYER_ORDER_SUCCESS,
  payload: data,
});

export const setDetailBuyerOrderSuccess = data => ({
  type: GET_DETAIL_BUYER_ORDER_SUCCESS,
  payload: data,
});

export const setBuyerOrderLoading = data => ({
  type: BUYER_ORDER_LOADING,
  payload: data,
});

export const setBuyerOrderFailed = error => ({
  type: GET_BUYER_ORDER_FAILED,
  payload: error,
});

export const fetchBuyerOrder = () => async dispatch => {
  dispatch(setBuyerOrderLoading(true));
  await getBuyerOrder()
    .then(res => {
      dispatch(setBuyerOrderSuccess(res.data));
      dispatch(setBuyerOrderLoading(false));
    })
    .catch(err => {
      dispatch(setBuyerOrderFailed(err.response.data.message));
      dispatch(setBuyerOrderLoading(false));
      showError(err.response.data.message);
    });
};

export const fetchDetailBuyerOrder = id => async dispatch => {
  dispatch(setBuyerOrderLoading(true));
  await detailBuyerOrder(id)
    .then(res => {
      dispatch(setDetailBuyerOrderSuccess(res.data));
      dispatch(setBuyerOrderLoading(false));
    })
    .catch(err => {
      dispatch(setBuyerOrderFailed(err.response.data.message));
      dispatch(setBuyerOrderLoading(false));
      showError(err.response.data.message);
    });
};

export const putBuyerOrder =
  (id_order, id_product, bid_price) => async dispatch => {
    dispatch(setBuyerOrderLoading(true));
    await updateBuyerOrder(id_order, id_product, bid_price)
      .then(() => {
        showSuccess('Bid Success');
      })
      .catch(err => {
        dispatch(setBuyerOrderLoading(false));
        showError(err.response.data.message);
        console.log(err);
      });
  };

export const delBuyerOrder = (id_order, navigation) => async dispatch => {
  dispatch(setBuyerOrderLoading(true));
  await deleteBuyerOrder(id_order)
    .then(() => {
      dispatch(setBuyerOrderLoading(false));
      showSuccess('Success Delete Order');
      if (navigation) {
        navigation.navigate('BuyerOrderScreen');
      }
    })
    .catch(() => {
      dispatch(setBuyerOrderLoading(false));
      showError('Delete order Failed');
    });
};
