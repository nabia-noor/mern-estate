// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7ba42.firebaseapp.com",
  projectId: "mern-estate-7ba42",
  storageBucket: "mern-estate-7ba42.firebasestorage.app",
  messagingSenderId: "107346570098",
  appId: "1:107346570098:web:c263cdfedbf93c8e02cbeb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);