// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahX7IsTJip4DjlQ9twPb5IHLVvHNitzA",
  authDomain: "netflix-raj-01.firebaseapp.com",
  projectId: "netflix-raj-01",
  storageBucket: "netflix-raj-01.firebasestorage.app",
  messagingSenderId: "330745057279",
  appId: "1:330745057279:web:6709e2f5b34b34b6a361ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
