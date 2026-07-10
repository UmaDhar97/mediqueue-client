import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashboardIndex = () => {

  const { isAdmin } = useContext(AuthContext);

  return isAdmin
    ? <Navigate to="/dashboard/admin-home" replace></Navigate>
    : <Navigate to="/dashboard/profile" replace></Navigate>;
};

export default DashboardIndex;