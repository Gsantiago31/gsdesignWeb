import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        isSaving: false,
        messageSaved: '',
        cards: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg,
        // }
    },
    reducers: {
        savingNewCard: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyCard: (state, action ) => {
            state.cards.push( action.payload );
            state.isSaving = false;
        },
        setActiveCard: (state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setCards: (state, action ) => {
            state.cards = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
            // TODO: mensaje de error...
        },
        updateCard: (state, action ) => { // payload : note
            state.isSaving = false;
            state.cards = state.cards.map(card => {

                if (card.id === action.payload.id) {
                    return action.payload;
                }

                return card;
            });

            // Todo: Mostrar mensaje de actualización
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveCard: ( state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearCardsLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.cards = [];
            state.active = null;
        },
        deleteCardById: (state, action ) => {
            state.active = null;
            state.cards = state.cards.filter( card => card.id !== action.payload );
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewCard,
    addNewEmptyCard,
    setActiveCard,
    setCards,
    setSaving,
    updateCard,
    deleteCardById,
    setPhotosToActiveCard,
    clearCardsLogout,
 } = dashboardSlice.actions;