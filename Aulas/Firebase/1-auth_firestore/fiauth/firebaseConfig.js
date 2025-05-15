// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZNUNiVVpw8shqtZygx9ZkcCkwPZzy1_M",
  authDomain: "fiauth-58da4.firebaseapp.com",
  projectId: "fiauth-58da4",
    databaseURL: "https://fiauth-58da4-default-rtdb.firebaseio.com",
  storageBucket: "fiauth-58da4.firebasestorage.app",
  messagingSenderId: "532203987068",
  appId: "1:532203987068:web:248c4ef4909de7480a69f9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);