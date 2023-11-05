import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxUNUkiK97IfP197LCDTXfl9MVA0UtDvI",
  authDomain: "khali-design.firebaseapp.com",
  projectId: "khali-design",
  storageBucket: "khali-design.appspot.com",
  messagingSenderId: "374176027874",
  appId: "1:374176027874:web:b5949ca81455817df7fabb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)