import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI_D8bWtT3uheWZaoCDPczLQ-5OsX7Aoo",
  authDomain: "mediqueue-7a5c0.firebaseapp.com",
  projectId: "mediqueue-7a5c0",
  storageBucket: "mediqueue-7a5c0.appspot.com",
  messagingSenderId: "601461109359",
  appId: "1:601461109359:web:f6986dfcfe6357a893139a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ IMPORTANT: export auth too
export const auth = getAuth(app);

export default app;