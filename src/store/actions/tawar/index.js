import { showError, showSuccess } from '../../../plugins';
import {addBuyerOrder} from '../../../services/api/buyer';
import {BID_SUCCESS, BID_FAILED} from '../../types';
import {setLoading} from '../common';

export const setBidSuccess = data => ({
  type: BID_SUCCESS,
  payload: data,
});

export const setBidFailed = error => ({
  type: BID_FAILED,
  payload: error,
});

export const doBid = (id, bid) => async dispatch => {
  dispatch(setLoading(true));
  await addBuyerOrder(id, bid)
    .then(res => {
      dispatch(setBidSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Bid Success');
      console.log('RES BID', res);
    })
    .catch(err => {
      dispatch(setBidFailed(err.message));
      dispatch(setLoading(false));
      showError(err.message);
      console.log('RES BID FAILED', err);
    });
};
