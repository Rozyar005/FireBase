console.log("auth.js loaded successfully");

import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

async function signup() {
  console.log("Signup button clicked");

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(name, username, email);

  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    console.log("Auth success", userCredential.user.uid);
        window.location.href = "login.html";

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name,
      username,
      email,
      createdAt: new Date()
    });

    console.log("User saved in Firestore");

    alert("Account created successfully! Please login.");

    // Redirect to login page
    window.location.href = "login.html";

  } catch (error) {
    console.error("Signup error:", error);
    alert(error.message);
  }
}


// Expose function to HTML
window.signup = signup;
