import { GET_DETAIL_PRODUCT_SUCCESS, GET_DETAIL_PRODUCT_FAIL, GET_DETAIL_PRODUCT_LOADING } from "../../types";


const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  dataProduk: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataProduk: action.payload,
      };
    case GET_DETAIL_PRODUCT_FAIL:
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