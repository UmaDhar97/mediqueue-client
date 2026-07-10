// Firebase throws errors like: "Firebase: Error (auth/email-already-in-use)."
// This turns the auth/xxx code into a clean, user-friendly sentence.
export const getFirebaseErrorMessage = (error) => {
  const code = error?.code || "";

  const messages = {
    "auth/email-already-in-use": "This email is already registered. Please login instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/weak-password": "Password is too weak.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/popup-closed-by-user": "Login popup was closed before finishing.",
    "auth/unauthorized-domain": "This domain is not authorized for login. Add it in Firebase Console > Authentication > Settings > Authorized domains.",
  };

  return messages[code] || error?.message || "Something went wrong. Please try again.";
};