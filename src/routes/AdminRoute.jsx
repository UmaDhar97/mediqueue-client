import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = ({ children }) => {

  const { user, loading, isAdmin } = useContext(AuthContext);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" />;
};

export default AdminRoute;