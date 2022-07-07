import { showError, showSuccess } from "../../../plugins";
import { updateProduct } from "../../../services/api/seller";
import { UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED } from "../../types";
import { setLoading } from "../common";
import { getProductSeller } from "./getProduct";

export const successUpdateProduct = (value) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: value,
});

export const failedUpdateProduct = () => ({
  type: UPDATE_PRODUCT_FAILED,
});

export const upDataProduct = (access_token, payload, id) => async dispatch => {
  dispatch(setLoading(true));
  console.log("Kirim Data Product",payload);
  await updateProduct(access_token, payload, id)
    .then(res => {
      dispatch(successUpdateProduct(res.data));
      dispatch(setLoading(false));
      showSuccess('Update Produk Success');
      console.log('UPDATE PRODUK', res);
    })
    .catch(err => {
      dispatch(failedUpdateProduct());
      dispatch(setLoading(false));
      showError(err.message);

      console.log('UPDATE PRODUK FAILED', err);
    });
}
