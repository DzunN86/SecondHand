import { deleteProduct } from "../../../services/api/seller";
import { showError, showSuccess } from "../../../plugins";
import { setLoading } from "../common";
import {
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED
} from "../../types";

export const deleteProductSellerSuccess = (data) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});

export const deleteProductSellerFailed = (error) => ({
  type: DELETE_PRODUCT_FAILED,
  payload: error,
});

export const deleteProductSeller = (id, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await deleteProduct(id).then((response) => {
    dispatch(deleteProductSellerSuccess(response.data));
    showSuccess('Delete product success');
    dispatch(setLoading(false));
    navigation.goBack();
  }).catch(err => {
    dispatch(deleteProductSellerFailed(err.message));
    showError(err.message);
    dispatch(setLoading(false));
  });
};