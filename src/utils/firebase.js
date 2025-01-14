// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-3357c.firebaseapp.com",
  projectId: "blogapp-3357c",
  storageBucket: "blogapp-3357c.firebasestorage.app",
  messagingSenderId: "197238073471",
  appId: "1:197238073471:web:b14b794a56c0a537f0774a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
