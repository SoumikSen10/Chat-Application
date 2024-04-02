// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmGHwP-58FFDCzm9--JXgk_l1ESRVaWWg",
  authDomain: "chat-application-fbc21.firebaseapp.com",
  projectId: "chat-application-fbc21",
  storageBucket: "chat-application-fbc21.appspot.com",
  messagingSenderId: "950651792881",
  appId: "1:950651792881:web:85866358a43dc4204d6850",
  measurementId: "G-78CQNW7S95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
