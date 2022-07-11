import { showError } from "../../../plugins";
import { getProduct } from "../../../services/api/seller";
import {
    GET_PRODUCTSELLER_SUCCESS,
    GET_PRODUCTSELLER_FAILED,
    GET_PRODUCTSELLER_LOADING,
} from "../../types";

export const setProductSellerSuccess = data => ({
    type: GET_PRODUCTSELLER_SUCCESS,
    payload: data,
});

export const setProductSellerLoading = loading => ({
    type: GET_PRODUCTSELLER_LOADING,
    payload: loading
})

export const setProductSellerFailed = error => ({
    type: GET_PRODUCTSELLER_FAILED,
    payload: error,
});

export const getProductSeller = (access_token) => async dispatch => {
    dispatch(setProductSellerLoading(true));
    await getProduct(access_token)
    .then(res => {
        dispatch(setProductSellerSuccess(res.data));
        dispatch(setProductSellerLoading(false));
    })
    .catch(err => {
        dispatch(setProductSellerFailed(err.message));
        dispatch(setProductSellerLoading(false));
        showError(err.message);
    });
};