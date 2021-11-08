import * as types from "../constants/user.constant";

const initialState = {
    cartProduct: [],
    loading: false,
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case types.ADD_TO_CART_REQUEST:
        case types.GET_TO_CART_REQUEST:
        case types.DELETE_FROM_CART_REQUEST:
        case types.POST_REVIEW_REQUEST:
        case types.POST_ORDER_REQUEST:
            return {...state, loading: true};
        case types.GET_TO_CART_SUCCESS:
            return {...state, cartProduct: payload.data.user.cart, loading: false};
        case types.ADD_TO_CART_FAIL:
        case types.ADD_TO_CART_SUCCESS:
        case types.GET_TO_CART_FAIL:
        case types.DELETE_FROM_CART_SUCCESS:
        case types.DELETE_FROM_CART_FAIL:
        case types.POST_REVIEW_SUCCESS:
        case types.POST_REVIEW_FAIL:
        case types.POST_ORDER_SUCCESS:
        case types.POST_ORDER_FAIL:
            return {...state, loading: false};
        default:
            return state;
    };
};

export default userReducer;