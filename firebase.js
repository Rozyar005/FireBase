// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAScFRSWVyBzlqzY699UupmxWTlxYSh5p4",
  authDomain: "news-78132.firebaseapp.com",
  projectId: "news-78132",
  storageBucket: "news-78132.firebasestorage.app",
  messagingSenderId: "316927431178",
  appId: "1:316927431178:web:cd1d31461360a1a19e05f3",
  measurementId: "G-YRB3XE6N3Z"
};

// ✅ Initialize
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THESE (this was missing or wrong)
export const auth = getAuth(app);
export const db = getFirestore(app);
