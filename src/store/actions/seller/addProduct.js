import {showError, showSuccess} from '../../../plugins';
import {addProduct} from '../../../services/api/seller';
import {ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS} from '../../types';
import {setLoading} from '../common';
import {getNotification} from '../notification';

export const setAddProductSuccess = value => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: value,
});

export const setAddProductFailed = () => ({
  type: ADD_PRODUCT_FAILED,
});

export const doProduct = (payload, navigation) => async dispatch => {
  dispatch(setLoading(true));
  console.log('Kirim Data Product', payload);
  await addProduct(payload)
    .then(res => {
      dispatch(setAddProductSuccess(res.data));
      dispatch(getNotification());
      dispatch(setLoading(false));
      showSuccess('Tambah Produk Success');
      navigation.navigate('Daftar Jual');
      console.log('ADD PRODUK', res);
    })
    .catch(err => {
      dispatch(setAddProductFailed());
      dispatch(setLoading(false));
      showError(err.response.message);

      console.log('ADD PRODUK FAILED', err);
    });
};
