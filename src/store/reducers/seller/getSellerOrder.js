import {
  GET_ORDERSELLER_SUCCESS,
  GET_ORDERSELLER_LOADING,
  GET_ORDERSELLER_FAILED,
  GET_ORDERDETAILSELLER_SUCCESS,
} from '../../types';

const initialState = {
  isLoading: false,
  isError: false,
  erroeMessage: '',
  orderSeller: [],
  detailOrderSeller: {},
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
