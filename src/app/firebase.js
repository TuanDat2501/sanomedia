// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA34KmcQ47TWUW7l_8gU3Kfj7U6CNxYqoQ",
    authDomain: "sanomedia-prod.firebaseapp.com",
    projectId: "sanomedia-prod",
    storageBucket: "sanomedia-prod.appspot.com",
    messagingSenderId: "1020371999604",
    appId: "1:1020371999604:web:b800a96d48e4ff4a51ea21",
    measurementId: "G-61HQTGRTY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = () => {
    if (typeof window !== "undefined") {
        return firebase.analytics()
    } else {
        return null
    }
}
export const storage = getStorage(app);