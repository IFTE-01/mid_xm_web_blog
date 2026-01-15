// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4gtvI0N3Y21-6M7lEk8N_lVUGucbOBno",
  authDomain: "blogwebsite-163ef.firebaseapp.com",
  projectId: "blogwebsite-163ef",
  storageBucket: "blogwebsite-163ef.firebasestorage.app",
  messagingSenderId: "633732270206",
  appId: "1:633732270206:web:a31b3e84d3c63dfae7702f",
  measurementId: "G-LL33ZRSM6Z"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 

export const auth = getAuth();
export default app;