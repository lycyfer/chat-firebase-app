
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWAR2AH8WMRRUbnVfo-FFHiQ3h7X_NVi0",
    authDomain: "chat-645fc.firebaseapp.com",
    projectId: "chat-645fc",
    storageBucket: "chat-645fc.appspot.com",
    messagingSenderId: "925249712788",
    appId: "1:925249712788:web:ba4b55a526677001b13a81"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()