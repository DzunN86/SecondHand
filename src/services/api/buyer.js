import axios from '../../plugins/axios';

// buyer/order
export const getBuyerOrder = async () => await axios.get('/buyer/order');
export const detailBuyerOrder = async (id) => await axios.get(`/buyer/order/${id}`);
export const addBuyerOrder = async (product_id, bid_price) => await axios.post('/buyer/order/', {product_id: product_id, bid_price: bid_price});
export const updateBuyerOrder = async (product_id, bid_price) => await axios.put('/buyer/order/', {product_id: product_id, bid_price: bid_price});
export const deleteBuyerOrder = async (id) => await axios.delete(`/buyer/order/${id}`);

// buyer/product
export const getBuyerProduct = async (params) => await axios.get(`/buyer/product${params}`);
export const detailBuyerProduct = async (id) => await axios.get(`/buyer/product/${id}`);