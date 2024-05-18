import { configureStore } from "@reduxjs/toolkit";
import CartSLice from "./CartSLice";
import productSlice from "./productSlice";
const store =configureStore({
    reducer : {
        cart: CartSLice,
        products: productSlice
    }
})

export default store;