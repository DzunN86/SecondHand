import {REGISTER_FAILED, REGISTER_SUCCESS} from '../../types';

const initialState = {
  isLoading: true,
  userData: {},
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
