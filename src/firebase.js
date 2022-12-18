import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ9U_gfcy-9osWGHIWJnJ0s0Fyu0sCL9g",
  authDomain: "blog-web-app-c0a15.firebaseapp.com",
  projectId: "blog-web-app-c0a15",
  storageBucket: "blog-web-app-c0a15.appspot.com",
  messagingSenderId: "547411489024",
  appId: "1:547411489024:web:158d9f8e064e8c489243e5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
