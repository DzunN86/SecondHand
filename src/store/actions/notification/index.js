import { showError } from '../../../plugins';
import { getNotif } from '../../../services/api/notification';
import {
    GET_NOTIFICATION_FAIL,
    GET_NOTIFICATION_LOADING,
    GET_NOTIFICATION_SUCCESS,
} from '../../types/notification';

export const setNotificationSuccess = data => ({
    type: GET_NOTIFICATION_SUCCESS,
    payload: data,
});

export const setNotificationLoading = loading => ({
    type: GET_NOTIFICATION_LOADING,
    payload: loading,
});

export const setNotificationFailed = error => ({
    type: GET_NOTIFICATION_FAIL,
    payload: error,
});

export const getNotification = () => async dispatch => {
    dispatch(setNotificationLoading(true));
    await getNotif()
        .then(res => {
            dispatch(setNotificationSuccess(res.data));
            dispatch(setNotificationLoading(false));
        })
        .catch(err => {
            dispatch(setNotificationFailed(err.response.data.message));
            dispatch(setNotificationLoading(false));
            showError(err.response.data.message);
        });
};
