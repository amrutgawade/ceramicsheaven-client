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
        }
    }
})

export const { setOrderSummary } = orderSlice.actions

export default orderSlice.reducer