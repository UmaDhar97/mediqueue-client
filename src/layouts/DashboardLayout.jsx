import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaEnvelope,
  FaChalkboardTeacher,
  FaPlusCircle,
  FaTachometerAlt,
  FaHome,
} from "react-icons/fa";

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all ${
    isActive
      ? "bg-orange-500 text-white"
      : "text-gray-600 hover:bg-orange-50"
  }`;

const DashboardLayout = () => {

  const { user, isAdmin } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex bg-[#fffaf5]">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-orange-100 p-6 hidden lg:block">

        <div className="flex items-center gap-3 mb-10">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-gray-800">{user?.displayName}</p>
            <p className="text-xs text-orange-500 font-semibold uppercase">
              {isAdmin ? "Admin" : "Student"}
            </p>
          </div>
        </div>

        <nav className="space-y-2">

          <NavLink to="/" className={linkClass}>
            <FaHome /> Back to Site
          </NavLink>

          {isAdmin ? (
            <>
              <NavLink to="/dashboard/admin-home" className={linkClass}>
                <FaTachometerAlt /> Admin Overview
              </NavLink>

              <NavLink to="/dashboard/manage-tutors" className={linkClass}>
                <FaChalkboardTeacher /> Manage Tutors
              </NavLink>

              <NavLink to="/dashboard/add-tutor" className={linkClass}>
                <FaPlusCircle /> Add Tutor
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard/profile" className={linkClass}>
                <FaUserCircle /> Profile
              </NavLink>

              <NavLink to="/dashboard/my-sessions" className={linkClass}>
                <FaCalendarCheck /> My Sessions
              </NavLink>

              <NavLink to="/dashboard/contact" className={linkClass}>
                <FaEnvelope /> Report / Contact
              </NavLink>
            </>
          )}

        </nav>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 lg:p-10">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;