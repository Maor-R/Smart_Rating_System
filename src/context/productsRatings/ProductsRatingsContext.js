import { createContext, useContext, useReducer } from "react";

import productsRatingsReducer from "./productsRatingsReducer";

import { PRODUCTS_RATINGS_ACTIONS } from "../actions";

import { api } from "../../api/api";

const ProductsRatingsContext = createContext();

const ProductsRatingsProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(productsRatingsReducer, initialState);

  const setLoading = () =>
    dispatch({ type: PRODUCTS_RATINGS_ACTIONS.SET_LOADING });

  const getProducts = async (str) => {
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
            if (str2.some((s2) => s.includes(s2))) {
              return true;
            }
            return false;
          })
        )
          return product;
      });
    }

    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_PRODUCTS,
      payload: resFilter,
    });
  };

  const getProduct = async (id) => {
    const res = state.products.filter((product) => product.id === id);

    dispatch({
      type: PRODUCTS_RATINGS_ACTIONS.GET_PRODUCT,
      payload: res[0],
    });
  };

  const clearProducts = () =>
    dispatch({ type: PRODUCTS_RATINGS_ACTIONS.CLEAR_PRODUCTS });

  return (
    <ProductsRatingsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        clearProducts,
        getProducts,
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
