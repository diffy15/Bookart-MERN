// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUPBbJB2oe7OFnpjVED6ki9Zf7UXL3L9U",
  authDomain: "mern-book-inventory-69d4d.firebaseapp.com",
  projectId: "mern-book-inventory-69d4d",
  storageBucket: "mern-book-inventory-69d4d.firebasestorage.app",
  messagingSenderId: "608945613535",
  appId: "1:608945613535:web:97d7db8dddb1235f64d76a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;