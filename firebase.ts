// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7_Mdlb7HHlpBlTlT_JhnSvhvDyHABgGU",
  authDomain: "note-2d7c8.firebaseapp.com",
  projectId: "note-2d7c8",
  storageBucket: "note-2d7c8.appspot.com",
  messagingSenderId: "1009156322400",
  appId: "1:1009156322400:web:222cf06845739abff73f05"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)