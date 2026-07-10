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

  const [isAdmin, setIsAdmin] = useState(false);

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

        // BEFORE: isAdmin was never reset here, so if the admin-check
        // request below failed (or on a fresh account switch), the OLD
        // isAdmin value from a previous session/user stayed true —
        // which is exactly why student and admin dashboards looked identical.
        setIsAdmin(false);

        if (currentUser?.email) {

          try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/jwt`,
              {
                email: currentUser.email,
              }
            );

            localStorage.setItem(
              "token",
              data.token
            );

            // save/sync this user in our own DB with a default role
            // so the server can later check admin vs student
            await axios.post(
              `${import.meta.env.VITE_API_URL}/users`,
              {
                name: currentUser.displayName,
                email: currentUser.email,
                photo: currentUser.photoURL,
              }
            );

            const token = localStorage.getItem("token");
            const adminRes = await axios.get(
              `${import.meta.env.VITE_API_URL}/users/admin/${currentUser.email}`,
              { headers: { authorization: `Bearer ${token}` } }
            );
            setIsAdmin(adminRes.data?.admin === true);
          } catch (error) {
            console.log("JWT/user sync error:", error);
            setIsAdmin(false);
          }

        } else {

          localStorage.removeItem("token");
          setIsAdmin(false);
        }

        setLoading(false);
      }
    );

    // safeguard: never let the app get stuck on "Loading..." forever
    // if firebase/network is slow or fails silently
    const safety = setTimeout(() => setLoading(false), 5000);

    return () => {
      unsubscribe();
      clearTimeout(safety);
    };

  }, []);

  const authInfo = {
    user,
    loading,
    isAdmin,
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