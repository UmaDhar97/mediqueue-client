import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { getFirebaseErrorMessage } from "../../utils/firebaseErrorMessage";

const Login = () => {

  const { loginUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state || "/";

  const handleLogin = async e => {

    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await loginUser(email, password);

      toast.success("Login Successful");

      // BEFORE: navigated to "from" (often just "/"), which could look
      // like nothing happened if the user was already on/near that page.
      // Now every successful login goes straight to the dashboard.
      navigate("/dashboard", { replace: true });

    } catch (err) {

      toast.error(getFirebaseErrorMessage(err));

    }
  };

  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogle = async () => {

    // BEFORE: nothing stopped a second click while the first popup was
    // still open, which triggers Firebase's auth/cancelled-popup-request
    if (googleLoading) return;

    setGoogleLoading(true);

    try {

      await googleLogin();

      toast.success("Google Login Success");

      navigate("/dashboard", { replace: true });

    } catch (err) {

      if (err.code !== "auth/cancelled-popup-request") {
        toast.error(getFirebaseErrorMessage(err));
      }

    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-4xl font-bold text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl"
            required
          />

          {/* was missing before - requirement asks for a Forget Password field/link */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => toast("Forget password isn't implemented in this project.")}
              className="text-sm text-blue-600"
            >
              Forget Password?
            </button>
          </div>

          <button className="w-full bg-yellow-400 py-4 rounded-xl font-bold">
            Login
          </button>

        </form>

        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-full border mt-5 py-4 rounded-xl disabled:opacity-60"
        >
          {googleLoading ? "Please wait..." : "Google Login"}
        </button>

        <p className="mt-5 text-center">

          New here?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;