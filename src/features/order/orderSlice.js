import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    orderPlaced: JSON.parse(sessionStorage.getItem("orderPlaced")),
    orderSummary: JSON.parse(sessionStorage.getItem("orderSummary"))
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderPlaced: (state, action) => {
            state.orderPlaced = { ...action.payload }
        },
        setOrderItems: (state, action) => {
            state.orderItems = [...action.payload]
        },
        setOrderSummary: (state, action) => {
            state.orderSummary = action.payload
        },
    }
})

export const { setOrderSummary, setOrderPlaced, setOrderItems } = orderSlice.actions

export default orderSlice.reducer