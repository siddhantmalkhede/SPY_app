import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsO4S0_lPWIsN9T_8SCVowk8shXu8g_3E",
  authDomain: "chat-f3fb0.firebaseapp.com",
  projectId: "chat-f3fb0",
  storageBucket: "chat-f3fb0.appspot.com",
  messagingSenderId: "313385456795",
  appId: "1:313385456795:web:c58f20c846dc9c2a76223e",
  measurementId: "G-VW1RS43LXV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const analytics = getAnalytics(app);
export const db = getFirestore();
