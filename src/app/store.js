import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import cartReducer from "../features/cart/cartSlice"
import productReducer from "../features/product/productSlice"
import orderReducer from "../features/order/orderSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        product: productReducer,
        order: orderReducer,
    }
})