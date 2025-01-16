// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNVlC1SPurh0mTa1c0fm9os2RiE7rxBic",
  authDomain: "login-page-8a412.firebaseapp.com",
  projectId: "login-page-8a412",
  storageBucket: "login-page-8a412.firebaseapp.com",
  messagingSenderId: "83583660731",
  appId: "1:83583660731:web:bed8a5eee1e194187e6f9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

// Export necessary functions and instances
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getFirestore,
  setDoc,
  doc,
  firestore, // Export Firestore instance for usage in other files
  auth, // Export Auth instance for usage in other files
};
