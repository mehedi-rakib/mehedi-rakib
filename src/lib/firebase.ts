// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABSx9vWzLuAeOvvKGUOGVoeq1hASPg10A",
  authDomain: "mehedi-rakib.firebaseapp.com",
  projectId: "mehedi-rakib",
  storageBucket: "mehedi-rakib.firebasestorage.app",
  messagingSenderId: "494624520552",
  appId: "1:494624520552:web:648717f78907f58fc53edd",
  measurementId: "G-5MNT2H7PX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
