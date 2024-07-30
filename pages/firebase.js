// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuqFp-UOEAV_YhZ_WHK_ZojCWJxFPj4uM",
  authDomain: "expense-tracker-48a5f.firebaseapp.com",
  projectId: "expense-tracker-48a5f",
  storageBucket: "expense-tracker-48a5f.appspot.com",
  messagingSenderId: "423063807059",
  appId: "1:423063807059:web:41659d2830198b4bbf12a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);