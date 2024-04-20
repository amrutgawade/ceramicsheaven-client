import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingAddress: JSON.parse(sessionStorage.getItem("shippingAddress")),
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addshippingAddress: (state1, action) => {
            const { firstName, lastName, streetAddress, city, state, zipCode, mobile } = action.payload
            state1.shippingAddress = { firstName, lastName, streetAddress, city, state, zipCode, mobile }
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        }
    }
})

export const { addshippingAddress, setPaymentMethod } = paymentSlice.actions

export default paymentSlice.reducer