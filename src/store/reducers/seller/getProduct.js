import {
    GET_PRODUCTSELLER_SUCCESS,
    GET_PRODUCTSELLER_LOADING,
    GET_PRODUCTSELLER_FAILED,
} from "../../types";

const initialState = {
    isLoading: false,
    isError: false,
    errorMessage: '',
    productSeller: [],
};

export const productSellerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTSELLER_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case GET_PRODUCTSELLER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                productSeller: action.payload,
            };
        case GET_PRODUCTSELLER_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
}