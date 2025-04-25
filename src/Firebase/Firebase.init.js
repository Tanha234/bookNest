// src/Firebase/Firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsXF7UI81hzhcEWazMqaReVAuRed1W6xk",
  authDomain: "booknest-d4b5e.firebaseapp.com",
  projectId: "booknest-d4b5e",
  storageBucket: "booknest-d4b5e.appspot.com", // ✅ fixed
  messagingSenderId: "665005730021",
  appId: "1:665005730021:web:e14ebb6a76ec43cc3b0c0c",
  measurementId: "G-EMMLR5X244"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
