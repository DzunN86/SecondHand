import {
  GET_HISTORY_FAILED,
  GET_HISTORY_LOADING,
  GET_HISTORY_SUCCESS,
} from '../../types'

const initialHistoryState = {
  history: [],
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const historyReducers = (state = initialHistoryState, action = {}) => {
  switch (action.type) {
    case GET_HISTORY_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        isLoading: false,
        error: null,
      }
    case GET_HISTORY_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isSuccess: false,
      };
    default:
      return state;
  }
}