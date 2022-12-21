import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAGMXQD4v8tRJfdIV3sFIC10s8aBjQMMmY",
  authDomain: "e-invoice-89c5f.firebaseapp.com",
  projectId: "e-invoice-89c5f",
  storageBucket: "e-invoice-89c5f.appspot.com",
  messagingSenderId: "995765961859",
  appId: "1:995765961859:web:b7c833a1d98b2ef15f87b6",
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
