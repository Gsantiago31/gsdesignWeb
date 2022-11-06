import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadCards = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/dashboard/item` );
    const docs = await getDocs(collectionRef);

    const cards = [];
    docs.forEach( doc => {
        cards.push({ id: doc.id, ...doc.data() });
    });
    console.log(cards)
    return cards;

}