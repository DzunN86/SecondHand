import {
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED
} from "../../types";

const initialState = {
  detailSuccessDelete: {},
  isError: null,
};

export const deleteProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isError: null,
        detailSuccessDelete: action.payload,
      };

    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
}