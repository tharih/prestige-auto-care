import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0PdfxtVt23e46pUIYxf1y3yLjDb7_NWQ",
  authDomain: "prestige-auto-care-335ac.firebaseapp.com",
  projectId: "prestige-auto-care-335ac",
  storageBucket: "prestige-auto-care-335ac.appspot.com",
  messagingSenderId: "896381278964",
  appId: "1:896381278964:web:75a0505e624d5b19539ca1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
