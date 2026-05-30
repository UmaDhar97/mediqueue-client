import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

  const { createUser, updateUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = async e => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      return setError("Must have uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Must have lowercase letter");
    }

    if (password.length < 6) {
      return setError("Password must be 6 characters");
    }

    try {

      await createUser(email, password);

      await updateUser({
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration Successful");

      navigate("/");

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
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
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

          {
            error && (
              <p className="text-red-500">
                {error}
              </p>
            )
          }

          <button className="w-full bg-yellow-400 py-4 rounded-xl font-bold">
            Register
          </button>

        </form>

        <button
          onClick={handleGoogle}
          className="w-full border mt-5 py-4 rounded-xl"
        >
          Google Login
        </button>

        <p className="mt-5 text-center">

          Already have account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;