import { createContext, useContext, useReducer } from "react";

import productsRatingsReducer from "./productsRatingsReducer";

import { PRODUCTS_RATINGS_ACTIONS } from "../actions";

import { api } from "../../api/api";
import { MAX_TOP_RATED } from "../../constants";
const ProductsRatingsContext = createContext();

const ProductsRatingsProvider = ({ children }) => {
  const initialState = {
    products: [],
    productsFilter: [],
    topRatedProducts: [],
    product: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(productsRatingsReducer, initialState);

  const setLoading = () =>
    dispatch({ type: PRODUCTS_RATINGS_ACTIONS.SET_LOADING });

  const getProducts = async () => {
    setLoading();
    const res = await api.get(`/products/`);

    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_PRODUCTS,
      payload: res.data,
    });
    return res.data;
  };

  const getProductsFilter = async (str) => {
    setLoading();
    let resFilter;

    const strSplit = str.toLowerCase().split(" ");
    const res = await api.get(`/products/`);
    if (str === "all") {
      resFilter = res.data;
    } else {
      resFilter = res.data.filter((product) => {
        if (
          strSplit.some((s) => {
            const str2 = product.name.toLowerCase().split(" ");
            console.log(str2);

            if (str2.some((s2) => s === s2)) {
              return true;
            }
            return false;
          })
        )
          return product;
      });
    }
    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_PRODUCTS_FILTER,
      payload: resFilter,
    });
    return resFilter;
  };

  const getTopRatedProducts = async () => {
    setLoading();
    let resFilter = [];

    const res = await api.get(`/products/`);

    const average =
      res.data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amountRatings,
        0
      ) / res.data.length;

    res.data.sort((a, b) =>
      a.finalRating < b.finalRating ? -1 : a.finalRating > b.finalRating ? 1 : 0
    );

    let max_top_rated = MAX_TOP_RATED;

    for (let i = 0; max_top_rated > 0 && i < res.data.length - 1; i++) {
      if (res.data[i].amountRatings >= average) {
        resFilter.push(res.data[i]);
        max_top_rated--;
      }
    }

    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_TOP_RATED_PRODUCT,
      payload: resFilter,
    });
    return resFilter;
  };

  const getProduct = async (id) => {
    setLoading();
    const res = await api.get(`/products/${id}`);
    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_PRODUCT,
      payload: res.data,
    });
  };

  const clearProductsFilter = () =>
    dispatch({ type: PRODUCTS_RATINGS_ACTIONS.CLEAR_PRODUCTS_FILTER });

  return (
    <ProductsRatingsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        topRatedProducts: state.topRatedProducts,
        productsFilter: state.productsFilter,
        clearProductsFilter,
        getProducts,
        getProductsFilter,
        getTopRatedProducts,
        getProduct,
      }}
    >
      {children}
    </ProductsRatingsContext.Provider>
  );
};

export const useProductsRatingsContext = () => {
  return useContext(ProductsRatingsContext);
};

export { ProductsRatingsProvider };
