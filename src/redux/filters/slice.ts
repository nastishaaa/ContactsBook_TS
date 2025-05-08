import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { Contact } from "../contacts/slice";

interface Filters {
    name: string;
}

const initialState: Filters = {
    name: ''
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = slice.actions;
export const selectFilter = (state:RootState) => state.filters.name;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts: Contact[], filter: string) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

export default slice.reducer;