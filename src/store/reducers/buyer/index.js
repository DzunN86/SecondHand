import {
  BID_SUCCESS,
  BID_FAILED,
  GET_BUYER_ORDER_FAILED,
  BUYER_ORDER_LOADING,
  GET_BUYER_ORDER_SUCCESS,
  GET_DETAIL_BUYER_ORDER_SUCCESS,
} from '../../types';

const initialState = {
  dataBid: {},
  dataBuyerOrder: [],
  dataDetailOrder: {},
  isLoading: false,
};

export const buyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUYER_ORDER_SUCCESS:
      return {
        ...state,
        dataBuyerOrder: action.payload,
      };
    case GET_DETAIL_BUYER_ORDER_SUCCESS:
      return {
        ...state,
        dataDetailOrder: action.payload,
      };

    case BUYER_ORDER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case BID_SUCCESS:
      return {
        ...state,
        dataBid: action.payload,
      };

    case BID_FAILED:
      return {
        ...state,
      };
    case GET_BUYER_ORDER_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};
