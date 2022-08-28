import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPJVwVsEw7cjaVI2BwR3wjBD0i1bbD7bA",
  authDomain: "badminton-d45eb.firebaseapp.com",
  projectId: "badminton-d45eb",
  storageBucket: "badminton-d45eb.appspot.com",
  messagingSenderId: "572894648741",
  appId: "1:572894648741:web:7b6a4d8558d1c5c114304c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
