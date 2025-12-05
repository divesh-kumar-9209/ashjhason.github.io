// firebase-config.js
// Replace the values inside firebaseConfig with your Firebase project values
export const firebaseConfig = {
  apiKey: "AIzaSyAJnlrtazUWr_HjQiEkFNcbnsve73g1pEQ",
  authDomain: "smart-opd-69488.firebaseapp.com",
  projectId: "smart-opd-69488",
  storageBucket: "smart-opd-69488.firebasestorage.app",
  messagingSenderId: "373276983810",
  appId: "1:373276983810:web:88a3018ab7b811550d1d1b",

};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
