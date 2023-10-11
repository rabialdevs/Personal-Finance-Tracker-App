import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: String(process.env.REACT_APP_API_KEY),
  authDomain: "personal-finance-tracker-7ebd4.firebaseapp.com",
  projectId: "personal-finance-tracker-7ebd4",
  storageBucket: "personal-finance-tracker-7ebd4.appspot.com",
  messagingSenderId: "210616767987",
  appId: "1:210616767987:web:79a4441af0bb5c67f36e86",
  measurementId: "G-PE9EJLLC6Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
