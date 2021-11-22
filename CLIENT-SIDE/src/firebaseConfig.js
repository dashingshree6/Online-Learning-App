import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBJYAgvsbsa185e4cJoqKNV-zOSxwwQDg",
  authDomain: "virtulum-app.firebaseapp.com",
  projectId: "virtulum-app",
  storageBucket: "virtulum-app.appspot.com",
  messagingSenderId: "976548413794",
  appId: "1:976548413794:web:a4c2cebab1d335452f2c3b",
  measurementId: "G-RQYN33MEFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

