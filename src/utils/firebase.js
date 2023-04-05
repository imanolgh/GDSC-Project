// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "new-horizon-81972.firebaseapp.com",
  projectId: "new-horizon-81972",
  storageBucket: "new-horizon-81972.appspot.com",
  messagingSenderId: "845741282550",
  appId: "1:845741282550:web:19f7290b5b9f6794e748d7",
  measurementId: "G-YD24DG4N5C",
};

// Initialize Firebase

const fapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fapp);

export const db = getFirestore(fapp);

// const fapp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(fapp);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(fapp);

export const auth = getAuth(fapp);
