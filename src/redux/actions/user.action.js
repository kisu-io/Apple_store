import api from '../../apiService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as types from '../constants/user.constant';
import cartActions from './cart.action';
import productActions from './product.action';

const userActions = {};

userActions.getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({type: types.GET_SINGLE_USER_REQUEST});
    const res = await api.get('/users/me');
    dispatch({type: types.GET_SINGLE_USER_SUCCESS});
  } catch (err) {
    // console.log(err);
    dispatch({type: types.GET_SINGLE_USER_FAIL});
  }
};

userActions.postReview = ({productId, review, rating}) => {
  return async (dispatch) => {
    dispatch({type: types.POST_REVIEW_REQUEST});
    try {
      const res = await api.post(`/reviews`, {
        productId: [productId],
        content: review,
        rating: rating,
      });
      dispatch({type: types.POST_REVIEW_SUCCESS});
      dispatch(productActions.getProductDetail({productId}));
      toast.success('Your review has been received');
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
      dispatch({type: types.POST_REVIEW_FAIL});
    }
  };
};

userActions.postOrder = () => {
  return async (dispatch) => {
    dispatch({type: types.POST_ORDER_REQUEST});
    try {
      const res = await api.post(`/orders`);
      dispatch({type: types.POST_REVIEW_SUCCESS});
      dispatch(cartActions.getCart());
      toast.success("We've received your order. Thanks for shopping with us!");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
      dispatch({type: types.POST_REVIEW_FAIL});
    }
  };
};

export default userActions;
