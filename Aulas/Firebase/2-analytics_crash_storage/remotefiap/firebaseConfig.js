import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getRemoteConfig } from 'firebase/remote-config';

// Optionally import the services that you want to use


// Initialize Firebase
const firebaseConfig = {
 apiKey: "AIzaSyBZNUNiVVpw8shqtZygx9ZkcCkwPZzy1_M",
  authDomain: "fiauth-58da4.firebaseapp.com",
  databaseURL: "https://fiauth-58da4-default-rtdb.firebaseio.com",
  projectId: "fiauth-58da4",
  storageBucket: "fiauth-58da4.firebasestorage.app",
  messagingSenderId: "532203987068",
  appId: "1:532203987068:web:248c4ef4909de7480a69f9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const remoteConfig = getRemoteConfig(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
