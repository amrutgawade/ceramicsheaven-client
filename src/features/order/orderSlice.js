import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {

    }
})

export const { } = orderSlice.actions

export default orderSlice.reducer