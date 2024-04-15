import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }
})

export const { setLogin, setLogout, setUser, setToken } = productSlice.actions

export default productSlice.reducer