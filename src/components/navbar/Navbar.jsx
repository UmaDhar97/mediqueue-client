import { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef();

  const { user, logoutUser, isAdmin } = useContext(AuthContext);

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const handleLogout = () => {
    logoutUser();
    setDropdown(false);
    setOpen(false);
  };

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-orange-500 duration-300"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/tutors"
          className="hover:text-orange-500 duration-300"
        >
          Tutors
        </Link>
      </li>
    </>
  );

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-orange-100">

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-300 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              MediQueue
            </h2>

            <p className="text-xs text-gray-500 -mt-1">
              Smart Tutor Booking
            </p>
          </div>

        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
          {links}
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">

          {
            user ? (

              <div
                ref={dropdownRef}
                className="relative"
              >

                {/* PROFILE BUTTON */}
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-3"
                >

                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt="profile"
                    className="w-11 h-11 rounded-full border-2 border-orange-400 object-cover"
                  />

                </button>

                {/* DROPDOWN */}
                <AnimatePresence>

                  {
                    dropdown && (

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl border border-orange-100 p-4"
                      >

                        {/* USER INFO */}
                        <div className="pb-4 border-b">

                          <h3 className="font-bold text-lg text-gray-800">
                            {user.displayName || "User"}
                          </h3>

                          <p className="text-sm text-gray-500 break-all">
                            {user.email}
                          </p>

                        </div>

                        {/* MENU */}
                        <div className="flex flex-col mt-4 gap-2">

                          <Link
                            to="/dashboard"
                            onClick={() => setDropdown(false)}
                            className="px-4 py-3 rounded-xl hover:bg-orange-50 duration-300 font-semibold"
                          >
                            {isAdmin ? "Admin Dashboard" : "Dashboard"}
                          </Link>

                          <button
                            onClick={handleLogout}
                            className="mt-3 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 duration-300"
                          >
                            Logout
                          </button>

                        </div>

                      </motion.div>
                    )
                  }

                </AnimatePresence>

              </div>

            ) : (

              <Link
                to="/login"
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 duration-300 text-white font-semibold"
              >
                Login
              </Link>
            )
          }

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {
            open
              ? <RxCross2 />
              : <HiOutlineMenuAlt3 />
          }
        </button>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {
          open && (

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-xl"
            >

              <ul className="flex flex-col gap-6 px-8 py-8 font-medium text-gray-700">

                {links}

                {
                  user && (
                    <li>
                      <Link to="/dashboard">
                        {isAdmin ? "Admin Dashboard" : "Dashboard"}
                      </Link>
                    </li>
                  )
                }

                <div className="flex flex-col gap-4 pt-4 border-t">

                  {
                    user ? (
                      <>
                        <div className="flex items-center gap-3">

                          <img
                            src={
                              user.photoURL ||
                              "https://i.ibb.co/4pDNDk1/avatar.png"
                            }
                            alt=""
                            className="w-11 h-11 rounded-full"
                          />

                          <div>
                            <h3 className="font-semibold">
                              {user.displayName}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>
                          </div>

                        </div>

                        <button
                          onClick={handleLogout}
                          className="w-full py-3 bg-orange-500 hover:bg-orange-600 duration-300 text-white rounded-xl"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link
                        to="/login"
                        className="w-full py-3 bg-orange-500 hover:bg-orange-600 duration-300 text-white rounded-xl text-center"
                      >
                        Login
                      </Link>
                    )
                  }

                </div>

              </ul>

            </motion.div>
          )
        }

      </AnimatePresence>

    </header>
  );
};

export default Navbar;