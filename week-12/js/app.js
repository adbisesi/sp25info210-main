
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyACo1pQqJlbJ_zl5jF3ROwvigNhe0VC1Yk",

  authDomain: "adbisesi-data.firebaseapp.com",

  projectId: "adbisesi-data",

  storageBucket: "adbisesi-data.firebasestorage.app",

  messagingSenderId: "651490951151",

  appId: "1:651490951151:web:b22d5a54b0dd58c2ed401a",

  measurementId: "G-KNEGZYGLR7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

