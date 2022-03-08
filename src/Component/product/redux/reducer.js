// import { act } from "react-dom/test-utils";
// import { FaAngleLeft } from "react-icons/fa";
import { REMOVE_FROM_CART } from "./action";
import { ADD_TO_CART } from "./action";
import { REMOVE_IN_CART } from "./action";

export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        const products = state.filter((item) => item.id !== action.payload.id);
        return [...products, product];
      }
      action.payload.quantity = 1;
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;

    case REMOVE_IN_CART:
      const products = state.find((item) => item.id === action.payload.id);
      if (products) {
        products.quantity -= 1;
        if (!products.quantity) {
          products.quantity += 1;
        } else {
        }
      }

      const productss = state.filter((item) => item.id !== action.payload.id);
      return [...productss, products];
  }
  action.payload.quantity = 1;
  return [...state, action.payload];
}
