import * as types from '../constants/cart.constant';

const initialState = {
  loading: false,
  errorMessage: '',
  cart: null,
};

const cartReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.ADD_TO_CART_REQUEST:
    case types.GET_TO_CART_REQUEST:
    case types.DELETE_FROM_CART_REQUEST:
      return {...state, loading: true};

    case types.GET_TO_CART_SUCCESS:
      return {...state, cart: payload, loading: false};

    case types.ADD_TO_CART_FAIL:
    case types.ADD_TO_CART_SUCCESS:
    case types.GET_TO_CART_FAIL:
    case types.DELETE_FROM_CART_SUCCESS:
    case types.DELETE_FROM_CART_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default cartReducer;
