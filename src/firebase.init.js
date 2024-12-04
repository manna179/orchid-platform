
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Cix7sJ_teLm7bu3nT7iIpQ0hTa885m8",
  authDomain: "orchid-category.firebaseapp.com",
  projectId: "orchid-category",
  storageBucket: "orchid-category.firebasestorage.app",
  messagingSenderId: "405132761131",
  appId: "1:405132761131:web:53d1b66a22a8fc8b8db26e",
  measurementId: "G-8Z0B0MLFFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth