// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const auth = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "new-horizon-81972.firebaseapp.com",
  projectId: "new-horizon-81972",
  storageBucket: "new-horizon-81972.appspot.com",
  messagingSenderId: "845741282550",
  appId: "1:845741282550:web:19f7290b5b9f6794e748d7",
  measurementId: "G-YD24DG4N5C",
}).auth();

// Initialize Firebase
// const fapp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(fapp);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(fapp);

export { auth }
// export {fapp};
