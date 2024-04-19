import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
    role: localStorage.getItem("auth"),
    address: []
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        addAddress: (state, action) => {
            state.address = [...action.payload]
        },
        removeAddress: (state, action) => {
            state.address = state.address.filter((item) => item.id !== action.payload)
        },
    }
})

export const { setRole, setToken, setUser, addAddress, removeAddress } = authSlice.actions

export default authSlice.reducer