import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBBr-qJ3EORQCxNILodZohkHuTOn3AdjFU",
  authDomain: "react-login-34315.firebaseapp.com",
  projectId: "react-login-34315",
  storageBucket: "react-login-34315.appspot.com",
  messagingSenderId: "1075451056132",
  appId: "1:1075451056132:web:3f3606db5bc8e8dcfbe551",
  measurementId: "G-4S1Z2D3NJW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)