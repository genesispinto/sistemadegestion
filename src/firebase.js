import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from "firebase/firestore"
// import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB9G1LNXY5rtY2TAdwTTVgapzjQ3AT7DgA",
    authDomain: "farmacia-f1cf9.firebaseapp.com",
    projectId: "farmacia-f1cf9",
    storageBucket: "farmacia-f1cf9.appspot.com",
    messagingSenderId: "746265754382",
    appId: "1:746265754382:web:0344a18c594039b3a2355f",
    measurementId: "G-WLSZT3JR0E"  
})

export const auth = firebase.auth();
export const firestoredb = getFirestore(app)