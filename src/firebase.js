import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_3HrakpNhy48ssf3-fp96KFF3J6qE0eA",
    authDomain: "derma360-160526.firebaseapp.com",
    projectId: "derma360-160526",
    storageBucket: "derma360-160526.firebasestorage.app",
    messagingSenderId: "867337930702",
    appId: "1:867337930702:web:0fa22f0b7334eb6a3b0d9f",
    measurementId: "G-2G0E36504C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);