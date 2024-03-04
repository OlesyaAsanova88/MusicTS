// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0fpUUpCvOSiGV0-JEyjftwCcj47cJRfA",
  authDomain: "musicts-c87d5.firebaseapp.com",
  projectId: "musicts-c87d5",
  storageBucket: "musicts-c87d5.appspot.com",
  messagingSenderId: "744641979278",
  appId: "1:744641979278:web:0107d4e5f8c5433a5efadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db } 