import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Contact } from "./slice";


type NewContact = {
    name: string;
    number: string;
}

interface UpdateContact extends Partial<NewContact> {
    id: string;
}

axios.defaults.baseURL = `https://connections-api.goit.global/`;

//  functions

export const fetchContacts = createAsyncThunk<Contact[]>(
    'contacts/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk<Contact, NewContact>(
    'contacts/addContact',
    async (body, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', body);
            return resp.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk<string, string>(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

    export const changeContact = createAsyncThunk<Contact, UpdateContact>(
        'contacts/changeContact',
        async (body, thunkAPI) => {
            try {
                const { id, ...data } = body;
                const response = await axios.patch(`/contacts/${id}`, data);
                return response.data
            } catch (error: any) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    )