import { ProductsAPI } from "../apis";
import { ProductsActions } from "../store/actions";
import { ProductsReducer, ProductsInitialState } from "../store/reducer";
import { Request } from "../utils";
import { useReducer } from "react";

export const ProductsService = () => {
  const [state, dispatch] = useReducer(ProductsReducer, ProductsInitialState);
  const { products, product, loading, error } = state;
  const { SET_PRODUCTS, SET_ONE_PRODUCT, DELETE_PRODUCT } = ProductsActions;

  const Fetch = () => {
    Request.GET({
      url: ProductsAPI,
      type: SET_PRODUCTS,
      dispatch
    });
  };

  const FetchById = (id) => {
    Request.GET_BY_ID({
      url: ProductsAPI,
      type: SET_ONE_PRODUCT,
      dispatch,
      id
    });
  };

  const Remove = (id) => {
    Request.DELETE({
      url: ProductsAPI,
      type: DELETE_PRODUCT,
      dispatch,
      id
    });
  };

  return { products, product, loading, error, Fetch, FetchById, Remove };
};
