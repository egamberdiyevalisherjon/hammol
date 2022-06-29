import { PRODUCT_CATEGORY_CHANGED, PRODUCT_NAME_CHANGED } from "./types";

export const changeName = (productName) => ({
  type: PRODUCT_NAME_CHANGED,
  payload: productName,
});

export const changeCategory = (categoryName) => ({
  type: PRODUCT_CATEGORY_CHANGED,
  payload: categoryName,
});
