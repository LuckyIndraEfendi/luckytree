// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTGldFwJTGhEFS-UF0js4Xwagm_6G7Un8",
  authDomain: "luckylinktrees.firebaseapp.com",
  projectId: "luckylinktrees",
  storageBucket: "luckylinktrees.appspot.com",
  messagingSenderId: "201952075799",
  appId: "1:201952075799:web:91cf4f6564788b7d71bc52",
  measurementId: "G-N6VTW0SJH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
