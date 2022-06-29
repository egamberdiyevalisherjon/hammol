import {
  PRODUCT_CATEGORY_CHANGED,
  PRODUCT_NAME_CHANGED,
} from "../actions/types";

const initialState = { name: "", category: "" };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_NAME_CHANGED:
      return { ...state, name: action.payload };
    case PRODUCT_CATEGORY_CHANGED:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default productReducer;
