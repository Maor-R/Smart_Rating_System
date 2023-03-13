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
      case PRODUCTS_RATINGS_ACTIONS.UPDATE_RATING_PRODUCT:
        return {
          ...state,
          loading: false
        };
      case PRODUCTS_RATINGS_ACTIONS.GET_PRODUCTS_FILTER:
        return {
          ...state,
          productsFilter: payload,
          loading: false
        };
      case PRODUCTS_RATINGS_ACTIONS.GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };

      case PRODUCTS_RATINGS_ACTIONS.DELETE_PRODUCT:
        return {
          ...state,
          loading: false
        };
    case PRODUCTS_RATINGS_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
      case PRODUCTS_RATINGS_ACTIONS.STOP_LOADING:
        return {
          ...state,
          loading: false
        };
    case PRODUCTS_RATINGS_ACTIONS.CLEAR_PRODUCTS_FILTER:
      return {
        ...state,
        productsFilter: [],
        loading: false,
      };
    case PRODUCTS_RATINGS_ACTIONS.GET_TOP_RATED_PRODUCT:
    return {  ...state,
      topRatedProducts: payload,
      loading: false,
    };
    default:
      return state;
  }
};