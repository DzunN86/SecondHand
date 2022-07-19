import { getHistory } from "../../../services";
import { showError } from "../../../plugins";
import { 
  GET_HISTORY_FAILED, 
  GET_HISTORY_LOADING, 
  GET_HISTORY_SUCCESS,
} from "../../types";

export const getHistorySuccess = (data) => ({
  type: GET_HISTORY_SUCCESS,
  payload: data,
});

export const getHistoryFailed = (error) => ({
  type: GET_HISTORY_FAILED,
  payload: error,
});

export const getHistoryLoading = (data) => ({
  type: GET_HISTORY_LOADING,
  payload: data,
});

export const getHistoryData = () => async (dispatch) => {
  dispatch(getHistoryLoading(true));
  await getHistory().then((res) => {
    dispatch(getHistorySuccess(res.data));
  }).catch((error) => {
    dispatch(getHistoryFailed(error.res.data.message));
    showError(error.res.data.message);
  });
};
