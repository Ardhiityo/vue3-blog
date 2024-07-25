import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vue-blog-33fef.firebaseapp.com",
  projectId: "vue-blog-33fef",
  storageBucket: "vue-blog-33fef.appspot.com",
  messagingSenderId: "350425688723",
  appId: "1:350425688723:web:7a816656c21d62a4343b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
