import { GET_CATEGORY_FAILED, GET_CATEGORY_SUCCESS } from "../../types";


const initialState = {
  category: [],
};

export const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}