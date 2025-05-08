import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AuthSlice } from './slice';
import type { RootState } from "../store";

interface User {
    name: string;
    email: string;
}

interface RefreshResponse {
    user: User;
    token: string;
}

axios.defaults.baseURL = `https://connections-api.goit.global/`;

type RegisterCredentials  = {
    name: string;
    email: string;
    password: string;
}

const setAuthHeader = (token: string): void => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
    axios.defaults.headers.common.Authorization = '';
};

// functions 

export const register = createAsyncThunk<AuthSlice, RegisterCredentials>(
    'auth/register', 
    async(body: RegisterCredentials , thunkAPI) => {
        try {
            const resp = await axios.post('/users/signup', body);
            setAuthHeader(resp.data.token);
            return resp.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
});

export const logIn = createAsyncThunk<AuthSlice, RegisterCredentials>(
    'auth/login', 
    async(body: RegisterCredentials , thunkAPI) => {
        try {
            const resp = await axios.post('/users/login', body);
            setAuthHeader(resp.data.token);
            return resp.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
});

export const logOut = createAsyncThunk<void>(
    'auth/logout', 
    async(_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
});


export const refresh = createAsyncThunk<RefreshResponse, void, { state: RootState }>(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return {
            user: res.data,
            token: persistedToken,
          };
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});