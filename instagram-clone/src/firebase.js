import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDdE_K8uhMwRbUcUJqIsMN2kmR4XevWMrM",
    authDomain: "instagram-clone-29189.firebaseapp.com",
    projectId: "instagram-clone-29189",
    storageBucket: "instagram-clone-29189.firebasestorage.app",
    messagingSenderId: "328847832304",
    appId: "1:328847832304:web:02de67a4b538efea97fe35",
    measurementId: "G-TJB6DZ97LV"
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };