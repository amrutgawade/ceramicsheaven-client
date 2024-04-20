import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingAddress: JSON.parse(sessionStorage.getItem("orderSummary")),
    paymentMethod: ""
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addshippingAddress: (state, action) => {
            state.shippingAddress = { ...action.payload }
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        }
    }
})

export const { addshippingAddress, setPaymentMethod } = paymentSlice.actions

export default paymentSlice.reducer