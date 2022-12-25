import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0XgolWsXtsxIpJvcGcgaDJe5QwGvoOL0",
  authDomain: "chat-fd044.firebaseapp.com",
  projectId: "chat-fd044",
  storageBucket: "chat-fd044.appspot.com",
  messagingSenderId: "1050174650089",
  appId: "1:1050174650089:web:bb0e4163593a21fbb0e278"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()