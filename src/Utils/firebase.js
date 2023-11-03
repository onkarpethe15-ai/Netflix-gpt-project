// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPc0ALhQbsjjnaZW_U-2hC2GdevIo6fzA",
  authDomain: "netflix-gpt-559fc.firebaseapp.com",
  projectId: "netflix-gpt-559fc",
  storageBucket: "netflix-gpt-559fc.appspot.com",
  messagingSenderId: "520134753992",
  appId: "1:520134753992:web:96c439cc19509ea54b2ffd",
  measurementId: "G-2WS1G7ETZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
