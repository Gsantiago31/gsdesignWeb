import { async } from "@firebase/util"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadCards } from "../../helpers";
import { addNewEmptyCard, deleteCardById, savingNewCard, setActiveCard, setCards, setPhotosToActiveCard, setSaving, updateCard } from "./dashboardSlice";


export const startNewCard = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewCard() );

        const { uid } = getState().auth;

        const newCard = {
            group: '',
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/dashboard/item`) );
        await setDoc( newDoc, newCard );

        newCard.id = newDoc.id;  

        //! dispatch
        dispatch( addNewEmptyCard( newCard ) );
        dispatch( setActiveCard( newCard ) );

    }
}


export const startLoadingCards = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const cards = await loadCards( uid );
        dispatch( setCards( cards ) );
    }
}

export const startSaveCard = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:card } = getState().dashboard;

        const cardToFireStore = { ...card };
        delete cardToFireStore.id;
    
        const docRef = doc( FirebaseDB, `${ uid }/dashboard/item/${ card.id }` );
        await setDoc( docRef, cardToFireStore, { merge: true });

        dispatch( updateCard( card ) );

    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
            
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        dispatch( setPhotosToActiveCard( photosUrls ));
        
    }
}


export const startDeletingCard = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: card } = getState().dashboard;

        const docRef = doc( FirebaseDB, `${ uid }/dashboard/item/${ card.id }`);
        await deleteDoc( docRef );

        dispatch( deleteCardById(card.id) );

    }
}