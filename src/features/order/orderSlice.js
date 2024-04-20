import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    orderSummary: JSON.parse(sessionStorage.getItem("orderSummary"))
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderSummary: (state, action) => {
            state.orderSummary = { ...action.payload }
        },
        setOrderItems: (state, action) => {
            state.orderItems = [...action.payload]
        }
    }
})

export const { setOrderSummary, setOrderItems } = orderSlice.actions

export default orderSlice.reducer