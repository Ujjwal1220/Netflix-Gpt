// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeIE28VeGtmw6dfhoTb6Bl5SiMbn7cjbY",
  authDomain: "netflix-gpt-b08cc.firebaseapp.com",
  projectId: "netflix-gpt-b08cc",
  storageBucket: "netflix-gpt-b08cc.appspot.com",
  messagingSenderId: "871109391889",
  appId: "1:871109391889:web:c599e7a020537ada3ee3b0",
  measurementId: "G-X48GE19PB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
