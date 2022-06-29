import {UPDATE_USER_SUCCESS, UPDATE_USER_FAILED} from '../../types';

const initialState = {
  isLoading: true,
  userData: {},
};

export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
      };

    case UPDATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
