// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "poc-test-movie.firebaseapp.com",
  projectId: "poc-test-movie",
  storageBucket: "poc-test-movie.firebasestorage.app",
  messagingSenderId: "376830514202",
  appId: "1:376830514202:web:5af923b1bd6c8b63442da3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
