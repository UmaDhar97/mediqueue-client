import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

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

      navigate(from);

    } catch (err) {

      toast.error(err.message);

    }
  };

  const handleGoogle = async () => {

    try {

      await googleLogin();

      toast.success("Google Login Success");

      navigate("/");

    } catch (err) {

      toast.error(err.message);

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

          <button className="w-full bg-yellow-400 py-4 rounded-xl font-bold">
            Login
          </button>

        </form>

        <button
          onClick={handleGoogle}
          className="w-full border mt-5 py-4 rounded-xl"
        >
          Google Login
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