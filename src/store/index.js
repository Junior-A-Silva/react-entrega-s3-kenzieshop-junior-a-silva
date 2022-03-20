import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/products/reducer";
import cartProductsReducer from "./modules/cart/reducer";
const reducers = combineReducers({
  products: productsReducer,
  cartProducts: cartProductsReducer,
});
const store = createStore(reducers);

export default store;
