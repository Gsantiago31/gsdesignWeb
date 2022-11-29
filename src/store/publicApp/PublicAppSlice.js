import { createSlice } from '@reduxjs/toolkit';

export const publicAppSlice = createSlice({
    name: 'publicApp',
    initialState: {
        cards: [],
    },
    reducers: {
        setCards: (state, action ) => {
            state.cards = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setCards } = publicAppSlice.actions;