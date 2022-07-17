import {showError, showSuccess} from '../../../plugins';
import {addBuyerOrder} from '../../../services/api/buyer';
import {BID_FAILED, BID_SUCCESS} from '../../types';
import {setLoading} from '../common';

export const setBidSuccess = data => ({
  type: BID_SUCCESS,
  payload: data,
});

export const setBidFailed = error => ({
  type: BID_FAILED,
  payload: error,
});

export const doBid = (product_id, bid_price, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await addBuyerOrder(product_id, bid_price)
    .then(res => {
      dispatch(setBidSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Bid Success');
      if (navigation) {
        navigation.navigate('BuyerOrderScreen');
      }
    })
    .catch(err => {
      dispatch(setBidFailed(err.response.data.message));
      dispatch(setLoading(false));
      showError(err.response.data.message);
    });
};
