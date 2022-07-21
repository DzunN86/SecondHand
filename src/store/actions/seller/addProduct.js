import {showError, showSuccess} from '../../../plugins';
import { buatChannel, cancelAllLocalNotifications, configure, kirimNotifikasi } from '../../../plugins/pushNotif';
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
      const notifProductTerbit = () => {
        configure(navigation);
        buatChannel('1');
        cancelAllLocalNotifications();
        kirimNotifikasi('1', 'Second Hand', 'Produk anda berhasil di terbitkan', res.data.id, "DetailProductScreen");
      };
      notifProductTerbit();
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
