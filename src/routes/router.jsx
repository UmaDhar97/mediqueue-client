import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tutors from "../pages/Tutors/Tutors";
import AddTutor from "../pages/AddTutor/AddTutor";
import MyTutors from "../pages/MyTutors/MyTutors";
import MyBookedSessions from "../pages/MyBookedSessions/MyBookedSessions";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"; 

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
        path: "/addTutor",
        element: (
          <PrivateRoute>
            <AddTutor></AddTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTutors",
        element: (
          <PrivateRoute>
            <MyTutors></MyTutors>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookedSessions",
        element: (
          <PrivateRoute>
            <MyBookedSessions></MyBookedSessions>
          </PrivateRoute>
        ),
      },
      {
   path: "/profile",
   element: (
      <PrivateRoute>
         <Profile></Profile>
      </PrivateRoute>
   )
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
]);

export default router;