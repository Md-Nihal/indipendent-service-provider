// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC0m36dNEhn3MGaqFyj9WSrSk73yFKxjc",
  authDomain: "dream-wedding-photography.firebaseapp.com",
  projectId: "dream-wedding-photography",
  storageBucket: "dream-wedding-photography.appspot.com",
  messagingSenderId: "28897693622",
  appId: "1:28897693622:web:891eff273e4154d155fb17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;