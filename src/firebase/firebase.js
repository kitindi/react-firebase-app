import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// setting up firebase config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ8BDum8oDFW6TCuhWv0QbgiW8jKanjqY",
  authDomain: "react-fireapp-7c857.firebaseapp.com",
  projectId: "react-fireapp-7c857",
  storageBucket: "react-fireapp-7c857.appspot.com",
  messagingSenderId: "959774429346",
  appId: "1:959774429346:web:da52b03c074fcfec9547fb",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// initialize database
export const db = getFirestore();

// setting up authentication

export const auth = getAuth();
