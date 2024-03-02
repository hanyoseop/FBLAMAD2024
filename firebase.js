// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"; 
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJTMIwyLAG8iedOkadqlMt-7JHlD-47WU",
  authDomain: "resumi-auth.firebaseapp.com",
  projectId: "resumi-auth",
  storageBucket: "resumi-auth.appspot.com",
  messagingSenderId: "1060115101963",
  appId: "1:1060115101963:web:2db1f7dca4923b3cf90a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Successfully initialized firebase");

export const AUTH = getAuth(app);
