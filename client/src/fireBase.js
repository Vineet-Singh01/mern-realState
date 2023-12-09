// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ac55c.firebaseapp.com",
  projectId: "mern-estate-ac55c",
  storageBucket: "mern-estate-ac55c.appspot.com",
  messagingSenderId: "647659358524",
  appId: "1:647659358524:web:b27e62e4d3f698f4e2f639"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;