import { GET_NOTIFICATION_FAIL, GET_NOTIFICATION_LOADING, GET_NOTIFICATION_SUCCESS } from "../../types/notification";


const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  notif: [],
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        notif: action.payload,
      };
    case GET_NOTIFICATION_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}