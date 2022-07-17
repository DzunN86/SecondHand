import {showError} from '../../../plugins';
import {detailSellerOrder, getSellerOrder} from '../../../services/api/seller';
import {
  GET_ORDERDETAILSELLER_SUCCESS,
  GET_ORDERSELLER_FAILED,
  GET_ORDERSELLER_LOADING,
  GET_ORDERSELLER_SUCCESS,
} from '../../types';

export const setOrderSellerSuccess = data => ({
  type: GET_ORDERSELLER_SUCCESS,
  payload: data,
});
export const setOrderDetailSellerSuccess = data => ({
  type: GET_ORDERDETAILSELLER_SUCCESS,
  payload: data,
});

export const setOrderSellerLoading = loading => ({
  type: GET_ORDERSELLER_LOADING,
  payload: loading,
});

export const setOrderSellerFailed = error => ({
  type: GET_ORDERSELLER_FAILED,
  payload: error,
});

export const getOrderSeller = () => async dispatch => {
  dispatch(setOrderSellerLoading(true));
  await getSellerOrder()
    .then(res => {
      dispatch(setOrderSellerSuccess(res.data));
      dispatch(setOrderSellerLoading(false));
    })
    .catch(err => {
      dispatch(setOrderSellerFailed(err.message));
      dispatch(setOrderSellerLoading(false));
      showError(err.message);
    });
};
export const getDetailOrderSeller = id => async dispatch => {
  dispatch(setOrderSellerLoading(true));
  await detailSellerOrder(id)
    .then(res => {
      dispatch(setOrderDetailSellerSuccess(res.data));
      dispatch(setOrderSellerLoading(false));
    })
    .catch(err => {
      dispatch(setOrderSellerLoading(false));
      showError(err.message);
    });
};
