import * as types from '../constants/user.constant';

const initialState = {
  cartProduct: [],
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.POST_REVIEW_REQUEST:
    case types.POST_ORDER_REQUEST:
      return {...state, loading: true};
    case types.POST_REVIEW_SUCCESS:
    case types.POST_REVIEW_FAIL:
    case types.POST_ORDER_SUCCESS:
    case types.POST_ORDER_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default userReducer;
