// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXgfhMmsLAUs_0djaZxEo9o_wI65QkDDo",
  authDomain: "fir-frontend-cddb3.firebaseapp.com",
  projectId: "fir-frontend-cddb3",
  storageBucket: "fir-frontend-cddb3.firebasestorage.app",
  messagingSenderId: "481620975319",
  appId: "1:481620975319:web:7d3801e2b2cb484ba51a92",
  measurementId: "G-FX55RVGV0Y",
  databaseURL: "https://fir-frontend-cddb3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Exporting Firebase services for use in other files
export { app, db};