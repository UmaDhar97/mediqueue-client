import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <span>Loading...</span>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={location.pathname}
    ></Navigate>
  );
};

export default PrivateRoute;