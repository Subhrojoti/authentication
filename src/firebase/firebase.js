// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVdmGdJLcZOlPEK6oa8_tOQf8whKmxZJI",
  authDomain: "login-auth-ed466.firebaseapp.com",
  projectId: "login-auth-ed466",
  storageBucket: "login-auth-ed466.appspot.com",
  messagingSenderId: "21052327090",
  appId: "1:21052327090:web:e24e9ff7e330613f36f5ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
