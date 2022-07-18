import {UPDATE_ORDER_LOADING, UPDATE_ORDER_SUCCESS} from '../../types';

const initialState = {
  isLoading: true,
  dataUpdateOrder: {},
};

export const upOrderSellerReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        dataUpdateOrder: action.payload,
      };

    case UPDATE_ORDER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
