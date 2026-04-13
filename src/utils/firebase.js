// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABfodzCmkB8zJvZhLpQqOdsN7S3RDoz1E",
  authDomain: "netflixgpt-eaec1.firebaseapp.com",
  projectId: "netflixgpt-eaec1",
  storageBucket: "netflixgpt-eaec1.firebasestorage.app",
  messagingSenderId: "771973071897",
  appId: "1:771973071897:web:472ebd74b874e04decd688",
  measurementId: "G-SCH6EJKQ1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();