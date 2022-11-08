import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAK-RIYx8m5o99u8j74H__g-UtdQMhjDPs",

  authDomain: "app-78dcf.firebaseapp.com",

  projectId: "app-78dcf",

  storageBucket: "app-78dcf.appspot.com",

  messagingSenderId: "784594987200",

  appId: "1:784594987200:web:5ab3e17b9db324461ea525",

  measurementId: "G-QYN0VWXV4V"

};



const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
