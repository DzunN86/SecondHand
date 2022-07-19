import {showError} from '../../../plugins';
import {detailSellerOrder, getSellerOrder} from '../../../services/api/seller';
import {
  GET_ORDERDETAILSELLER_SUCCESS,
  GET_ORDERSELLER_FAILED,
  GET_ORDERSELLER_LOADING,
  GET_ORDERSELLER_SUCCESS,
  SET_ORDERSELLER_TERJUAL,
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

export const setOrderSellerTerjual = data => ({
  type: SET_ORDERSELLER_TERJUAL,
  payload: data,
});

export const getOrderSeller = () => async dispatch => {
  dispatch(setOrderSellerLoading(true));
  await getSellerOrder()
    .then(res => {
      const dataFilterTerjual = [];
      const dataFilterDiminati = [];
      // Terjual
      const checkDataTerjual = async () => {
        for (let i = 0; i < res.data.length; i += 1) {
          if (res.data[i]?.status === 'seller') {
            dataFilterTerjual.push(res.data[i]);
          } else if (res.data[i]?.status !== 'available') {
            dataFilterDiminati.push(res.data[i]);
          }
        }
      };

      checkDataTerjual();
      dispatch(setOrderSellerTerjual(dataFilterTerjual));
      dispatch(setOrderSellerSuccess(dataFilterDiminati));
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
