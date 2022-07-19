import {
  GET_ORDERSELLER_SUCCESS,
  GET_ORDERSELLER_LOADING,
  GET_ORDERSELLER_FAILED,
  GET_ORDERDETAILSELLER_SUCCESS,
  SET_ORDERSELLER_TERJUAL,
} from '../../types';

const initialState = {
  isLoading: false,
  isError: false,
  erroeMessage: '',
  orderSeller: [],
  detailOrderSeller: {},
  productTerjual: [],
};

export const orderSellerReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERSELLER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_ORDERSELLER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        orderSeller: action.payload,
      };
    case SET_ORDERSELLER_TERJUAL:
      return {
        ...state,
        isLoading: false,
        productTerjual: action.payload,
      };
    case GET_ORDERDETAILSELLER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailOrderSeller: action.payload,
      };
    case GET_ORDERSELLER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
