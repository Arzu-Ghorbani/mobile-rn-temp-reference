import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPikiyOYPL_w63gc60SJtXMZKPtfLP-lE",
  authDomain: "react-final-c9159.firebaseapp.com",
  projectId: "react-final-c9159",
  storageBucket: "react-final-c9159.appspot.com",
  messagingSenderId: "141743352018",
  appId: "1:141743352018:web:51dd21a35863166da9e50b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage=getStorage(app);
