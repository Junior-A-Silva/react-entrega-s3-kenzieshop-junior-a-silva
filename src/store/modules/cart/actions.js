import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const addProduct = (newProduct) => ({ type: ADD_PRODUCT, newProduct });

export const removeProduct = (newProduct) => ({
  type: REMOVE_PRODUCT,
  newProduct,
});
