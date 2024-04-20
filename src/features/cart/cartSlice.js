import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItem: 0,
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
    // user: {}
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.cartItems = [...action.payload]
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        emptyCart: (state) => {
            state.cartItems = []
            state.totalItem = 0
            state.totalPrice = 0
            state.totalDiscountedPrice = 0
            state.discount = 0
        },
        setTotalItem: (state, action) => {
            state.totalItem = action.payload
        },
        seTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        },
        setTotalDiscountedPrice: (state, action) => {
            state.totalDiscountedPrice = action.payload
        },
        setDiscount: (state, action) => {
            state.discount = action.payload
        },
    }
})

export const { addCartItem, setTotalItem, seTotalPrice, setTotalDiscountedPrice, setDiscount, removeCartItem, emptyCart } = cartSlice.actions

export default cartSlice.reducer