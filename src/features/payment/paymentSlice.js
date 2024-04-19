import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingAddress: {
        id: null,
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        mobile: "",
    },
    paymentMethod: ""
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addshippingAddress: (state, action) => {
            state.shippingAddress.id = action.payload.id
            state.shippingAddress.firstName = action.payload.firstName
            state.shippingAddress.lastName = action.payload.lastName
            state.shippingAddress.streetAddress = action.payload.streetAddress
            state.shippingAddress.city = action.payload.city
            state.shippingAddress.state = action.payload.state
            state.shippingAddress.zipCode = action.payload.zipCode
            state.shippingAddress.mobile = action.payload.mobile
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        }
    }
})

export const { addshippingAddress, setPaymentMethod } = paymentSlice.actions

export default paymentSlice.reducer