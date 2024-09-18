// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-GqC_bKke2G6erczedBcHbYCjc7OWNs",
  authDomain: "netflixgpt-42b75.firebaseapp.com",
  projectId: "netflixgpt-42b75",
  storageBucket: "netflixgpt-42b75.appspot.com",
  messagingSenderId: "957123723945",
  appId: "1:957123723945:web:c52cff981de63c4aa2dfb8",
  measurementId: "G-GPTF3BR06X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);