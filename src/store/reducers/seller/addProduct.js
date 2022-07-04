import {ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILED} from '../../types';

const initialState = {
  isLoading: true,
  dataProduk: [],
};

export const addProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduk: action.payload,
      };

    case ADD_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
