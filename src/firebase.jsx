// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQIbZEQgVG6yhdThnLwQ1gZT9yzbmt-hc",
  authDomain: "contactssystem-d89f0.firebaseapp.com",
  projectId: "contactssystem-d89f0",
  storageBucket: "contactssystem-d89f0.appspot.com",
  messagingSenderId: "113769557649",
  appId: "1:113769557649:web:3af1f917b6d6d6b3dd5930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
