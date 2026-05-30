import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  getAuth,
} from "firebase/auth";

import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {

    setLoading(true);

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const loginUser = (email, password) => {

    setLoading(true);

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const googleLogin = () => {

    setLoading(true);

    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  
const logoutUser = () => {

  localStorage.removeItem("token");

  return signOut(auth);
};

  const updateUser = profile => {

    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async currentUser => {

        setUser(currentUser);

        if (currentUser?.email) {

          const { data } = await axios.post(
            "http://localhost:5000/jwt",
            {
              email: currentUser.email,
            }
          );

          localStorage.setItem(
            "token",
            data.token
          );

        } else {

          localStorage.removeItem("token");
        }

        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;