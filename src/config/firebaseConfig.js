import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBjQhoZPSVLhYtRY4IYqyjzUTuKzot9rWM",
    authDomain: "create-and-read-app-todolist.firebaseapp.com",
    projectId: "create-and-read-app-todolist",
    storageBucket: "create-and-read-app-todolist.firebasestorage.app",
    messagingSenderId: "1063146039897",
    appId: "1:1063146039897:web:3051b261a0c9742b2edf48",
    measurementId: "G-QSB8D75NS7"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 