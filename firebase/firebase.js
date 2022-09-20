// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvJ6HJzuv9GTVgPAxToeNX9nOapWVyehs",
  authDomain: "medic-4634f.firebaseapp.com",
  projectId: "medic-4634f",
  storageBucket: "medic-4634f.appspot.com",
  messagingSenderId: "337750803252",
  appId: "1:337750803252:web:ac6c50818011ff1f9d5b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);