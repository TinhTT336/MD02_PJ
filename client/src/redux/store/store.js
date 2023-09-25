import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../useSlice/categorySlice";
import managerProductSlice from "../useSlice/managerProductSlice";
import thunk from "redux-thunk";
import userSlice from "../useSlice/userSlice";
import cartSlice from "../useSlice/cartSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    products: managerProductSlice,
    user: userSlice,
    carts: cartSlice,
  },
  // middleware: [thunk],
});
