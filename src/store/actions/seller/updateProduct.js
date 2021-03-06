import {showError, showSuccess} from '../../../plugins';
import {updateProduct} from '../../../services/api/seller';
import {UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED} from '../../types';
import {setLoading} from '../common';
import { getDetailSeller } from './detailProduct';

export const successUpdateProduct = value => ({
  type: UPDATE_PRODUCT_SUCCESS,
  data: value,
});

export const failedUpdateProduct = () => ({
  type: UPDATE_PRODUCT_FAILED,
});

export const upDataProduct = (id, data, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await updateProduct(id, data)
    .then(res => {
      dispatch(successUpdateProduct(res.data));
      dispatch(setLoading(false));
      dispatch(getDetailSeller(id));
      navigation.goBack();
      showSuccess('Update Produk Success');
    })
    .catch(err => {
      dispatch(failedUpdateProduct());
      dispatch(setLoading(false));
      showError(err.response.message);
    });
};
