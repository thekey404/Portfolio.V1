// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD07EnHBCQkaf1pbDY6_pMnEPnTKKhnF9U",
    authDomain: "portfolio-v1-cfc98.firebaseapp.com",
    projectId: "portfolio-v1-cfc98",
    storageBucket: "portfolio-v1-cfc98.firebasestorage.app",
    messagingSenderId: "99655847636",
    appId: "1:99655847636:web:2e17764cee2d585b2fb541",
    measurementId: "G-F9ZQNZVVC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
