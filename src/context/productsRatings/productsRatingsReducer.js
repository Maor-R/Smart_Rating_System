/* eslint-disable import/no-anonymous-default-export */
import { PRODUCTS_RATINGS_ACTIONS } from '../actions';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_RATINGS_ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
      case PRODUCTS_RATINGS_ACTIONS.GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };

    case PRODUCTS_RATINGS_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case PRODUCTS_RATINGS_ACTIONS.CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        loading: false,
      };
    default:
      return state;
  }
};