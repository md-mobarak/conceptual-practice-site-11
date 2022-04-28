// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9Rs6-ff9FMolpAVvm9mw1AEuUhf-tnHY",
    authDomain: "conceptual-practice-site-11.firebaseapp.com",
    projectId: "conceptual-practice-site-11",
    storageBucket: "conceptual-practice-site-11.appspot.com",
    messagingSenderId: "981696705999",
    appId: "1:981696705999:web:ca18d687aa66f9bc554eba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;