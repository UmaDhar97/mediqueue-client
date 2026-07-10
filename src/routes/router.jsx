import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tutors from "../pages/Tutors/Tutors";
import AddTutor from "../pages/AddTutor/AddTutor";
import MyBookedSessions from "../pages/MyBookedSessions/MyBookedSessions";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import AdminHome from "../pages/Dashboard/AdminHome";
import AdminUsers from "../pages/Dashboard/AdminUsers";
import AdminBookings from "../pages/Dashboard/AdminBookings";
import ManageTutors from "../pages/Dashboard/ManageTutors";
import Contact from "../pages/Dashboard/Contact";
import DashboardIndex from "./DashboardIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/tutors",
        element: <Tutors></Tutors>,
      },
      {
        path: "/tutor/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <DashboardIndex></DashboardIndex>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "my-sessions",
        element: <MyBookedSessions></MyBookedSessions>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "admin-users",
        element: (
          <AdminRoute>
            <AdminUsers></AdminUsers>
          </AdminRoute>
        ),
      },
      {
        path: "admin-bookings",
        element: (
          <AdminRoute>
            <AdminBookings></AdminBookings>
          </AdminRoute>
        ),
      },
      {
        path: "manage-tutors",
        element: (
          <AdminRoute>
            <ManageTutors></ManageTutors>
          </AdminRoute>
        ),
      },
      {
        path: "add-tutor",
        element: (
          <AdminRoute>
            <AddTutor></AddTutor>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;