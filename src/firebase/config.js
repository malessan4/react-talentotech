// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeQnKorrmJ_Eknu7nyAyd5WVdrMDIF-zk",
    authDomain: "mda-store.firebaseapp.com",
    projectId: "mda-store",
    storageBucket: "mda-store.firebasestorage.app",
    messagingSenderId: "331346070883",
    appId: "1:331346070883:web:ae18c23ebf7ceae2599756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };