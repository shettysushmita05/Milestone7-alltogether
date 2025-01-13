import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyqql9yjsLUm1iwUrN-xvXnkJsGCLp9ds",
    authDomain: "task4-803f3.firebaseapp.com",
    projectId: "task4-803f3",
    storageBucket: "task4-803f3.firebasestorage.app",
    messagingSenderId: "212760448557",
    appId: "1:212760448557:web:2a296270d574d3c29a72a4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
