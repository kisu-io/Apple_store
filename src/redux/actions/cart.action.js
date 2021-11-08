import api from '../../apiService';
import * as types from '../constants/cart.constant';
import {toast} from 'react-toastify';

const cartActions = {};

cartActions.addToCart = ({addingProductToCart}) => {
  return async (dispatch) => {
    dispatch({type: types.ADD_TO_CART_REQUEST});
    try {
      let url = `/users/cart`;
      const res = await api.post(url, {
        productId: addingProductToCart,
        quantity: 1,
      });
      dispatch({type: types.ADD_TO_CART_SUCCESS, payload: res.data});
      toast.success('Item has successfully been added to your cart');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      dispatch({type: types.ADD_TO_CART_FAIL, payload: err.message});
    }
  };
};

cartActions.getCartProduct = () => {
  return async (dispatch) => {
    try {
      dispatch({type: types.GET_TO_CART_REQUEST});
      const res = await api.get(`/users/me`);
      dispatch({type: types.GET_TO_CART_SUCCESS, payload: res.data.data.user.cart});
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      dispatch({type: types.GET_TO_CART_FAIL});
    }
  };
};

cartActions.deleteCart = (productId) => {
  return async (dispatch) => {
    dispatch({type: types.DELETE_FROM_CART_REQUEST});
    try {
      let url = `/users/cart`;
      const res = await api.delete(url);
      toast.success('The book has been removed from your cart');
      dispatch(cartActions.getCartProduct());
      dispatch({type: types.DELETE_FROM_CART_SUCCESS});
    } catch (err) {
      console.log(err);
      dispatch({type: types.DELETE_FROM_CART_FAIL});
    }
  };
};

export default cartActions;
