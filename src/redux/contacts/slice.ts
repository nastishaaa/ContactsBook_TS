import { createSlice, isAnyOf, type PayloadAction } from "@reduxjs/toolkit";
import { addContact, changeContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

export type Contact = {
    id: string;
    name: string;
    number: string;
}

interface ContactsState {
    items: Contact[];
    isLoading: boolean;
    error: boolean | null;
}

const initialState: ContactsState = {
    items: [],
    isLoading: false, 
    error: null,
}

const handlePending = (state: ContactsState) => {
    state.isLoading = true;
};

const handleRejected = (state: ContactsState, action: PayloadAction<any>) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(item => 
                item.id !== action.payload)
        })
        .addCase(logOut.fulfilled, state => {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        })
        .addCase(changeContact.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.items = state.items.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
        })
        .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, changeContact.pending), 
        () => {
            handlePending;
        })
        .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, changeContact.rejected), 
        () => {
            handleRejected;
        })
    },
});

export default slice.reducer;