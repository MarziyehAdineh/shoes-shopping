import { createStore } from "redux";
import { cartReducer } from "./reducer";
export const cartstore=createStore(cartReducer);