import {UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILED} from '../../types';

const initialState = {
  isLoading: true,
  dataPassword: {},
};

export const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPassword: action.payload,
      };

    case UPDATE_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
