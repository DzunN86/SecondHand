import axios from '../../plugins/axios';

// buyer/order
export const getBuyerOrder = async () => await axios.get('/buyer/order');
export const detailBuyerOrder = async (id) => await axios.get(`/buyer/order/${id}`);
export const addBuyerOrder = async (product_id, bid_price) => await axios.post('/buyer/order/', {product_id: product_id, bid_price: bid_price});
export const updateBuyerOrder = async (id_order, id_product, bid_price) => await axios.put(`/buyer/order/${id_order}`, {product_id: id_product, bid_price: bid_price});
export const deleteBuyerOrder = async (id) => await axios.delete(`/buyer/order/${id}`);

// buyer/product
export const getBuyerProduct = async (params) => await axios.get(`/buyer/product${params}`);
export const detailBuyerProduct = async (id) => await axios.get(`/buyer/product/${id}`);

// buyer/wishlist
export const getWishlist = async () => await axios.get('/buyer/wishlist');
export const detailWishlist = async (id) => await axios.get(`/buyer/wishlist/${id}`);
export const addWishlist = async (product_id) => await axios.post(`/buyer/wishlist/${product_id}`);
export const deleteWishlist = async (product_id) => await axios.delete(`/buyer/wishlist/${product_id}`);
export const updateWishlist = async (product_id, payload) => await axios.put(`/buyer/wishlist/${product_id}`, payload);