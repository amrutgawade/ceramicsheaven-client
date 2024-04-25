import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    searchProduct: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductItems: (state, action) => {
            state.products = [...action.payload]
        },
        setSearchProduct: (state, action) => {
            state.searchProduct = action.payload
        },
        clearSearch: (state) => {
            state.searchProduct = ""
        },
        applyProductFilter: (state, action) => {
            state.products = [...action.payload]
        }
    }
})

export const { setProductItems, setSearchProduct, clearSearch, applyProductFilter } = productSlice.actions

export default productSlice.reducer