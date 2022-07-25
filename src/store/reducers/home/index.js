import {
  GET_NEXT_PRODUCT_LOADING,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  SET_BANNER,
} from '../../types';

const initialState = {
  isLoading: false,
  nextLoading: false,
  isError: false,
  errorMessage: '',
  products: [],
  banners: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_NEXT_PRODUCT_LOADING:
      return {
        ...state,
        nextLoading: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case SET_BANNER:
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
};
