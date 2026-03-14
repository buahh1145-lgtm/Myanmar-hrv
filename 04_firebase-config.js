// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo95ELzWwR6tqQYsweLNKAbNCQM0GciMA",
  authDomain: "myanmar-hrv.firebaseapp.com",
  databaseURL: "https://myanmar-hrv-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myanmar-hrv",
  storageBucket: "myanmar-hrv.firebasestorage.app",
  messagingSenderId: "222986219420",
  appId: "1:222986219420:web:cdee681def1d3052a5a259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };