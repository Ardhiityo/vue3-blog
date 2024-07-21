import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vueblog-29ae6.firebaseapp.com",
  projectId: "vueblog-29ae6",
  storageBucket: "vueblog-29ae6.appspot.com",
  messagingSenderId: "332935664547",
  appId: "1:332935664547:web:08e2289c2d16f14a59c016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
