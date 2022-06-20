import axios from '../../plugins/axios';

export const getNotif = async () => await axios.get('/notification');
export const detailNotif = async (id) => await axios.get(`/notification${id}`);