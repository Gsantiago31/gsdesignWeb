import {loadPublicCards } from "../../helpers";
import { setCards } from "./PublicAppSlice";


export const startLoadingPublicCards = () => {
    return async( dispatch) => {
        
        const uid = 'So5d2qvOIMcJqK9ZNMkQabtUAr13'
        // if ( !uid ) throw new Error('El UID del usuario no existe');

        const cards = await loadPublicCards( uid );
        dispatch( setCards( cards ) );
    }
}