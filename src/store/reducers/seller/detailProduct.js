import {
  GET_DETAIL_SELLER_LOADING,
  GET_DETAIL_SELLER_FAILED,
  GET_DETAIL_SELLER_SUCCESS
} from "../../types";

const initialState = {
  isLoading: false,
  isError: false,
  erroMessage: '',
  detailProduk: [],
};

export const detailSellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_SELLER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_DETAIL_SELLER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailProduk: action.payload,
      };
    case GET_DETAIL_SELLER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        erroMessage: action.payload,
      }
    default:
      return state;
  }
}