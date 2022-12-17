// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqppJd5YdXamvGZQnJK-vk1tHhbtsFb2k",
  authDomain: "gsdesign-31114.firebaseapp.com",
  projectId: "gsdesign-31114",
  storageBucket: "gsdesign-31114.appspot.com",
  messagingSenderId: "402908576322",
  appId: "1:402908576322:web:5d218664b99763989ecbdb",
  measurementId: "G-B6F0JPS4KX"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAnalytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );