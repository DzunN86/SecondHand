import {SET_LOADING} from '../../types';

const initialState = {
  isLoading: false,
};

export const commonReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
