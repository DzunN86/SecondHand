import { UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED } from "../../types";

const initialState = {
  isLoading: true,
  dataProduk: {},
};

export const upProductReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduk: action.payload,
      };

    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}