import { ProductsActions, GlobalActions } from "../actions";

export const state = {
  products: [],
  product: {},
  loading: false,
  error: null
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const {
    SET_PRODUCTS,
    SET_ONE_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT
  } = ProductsActions;
  const { SET_LOADING, SET_ERROR } = GlobalActions;

  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      };

    case SET_ONE_PRODUCT:
      return {
        ...state,
        product: payload
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(payload)
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload)
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
