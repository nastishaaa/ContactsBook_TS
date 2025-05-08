import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh } from "./operations";

export interface AuthSlice {
    user: {
        name: string | null;
        email: string | null;
    };
    token: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
}

const initialState: AuthSlice = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, () => initialState)
            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refresh.rejected, (state) => {
                state.isRefreshing = false;
                
            })
    }
})

export default slice.reducer;