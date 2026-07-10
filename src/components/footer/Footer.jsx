import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F1A33] text-[#F7F3EA] pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* logo + about */}
          <div>

            <div className="flex items-center gap-3">

              <div
                className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center font-bold text-xl text-[#0F1A33]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                M
              </div>

              <div>
                <h2
                  className="text-3xl"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  MediQueue
                </h2>

                <p className="text-sm text-[#A9B4CE]">
                  Smart Tutor Booking
                </p>
              </div>

            </div>

            <p className="mt-6 text-[#A9B4CE] leading-relaxed max-w-sm">
              Book trusted tutors, schedule sessions,
              and improve your learning journey with
              our premium online learning platform.
            </p>

            {/* socials */}
            <div className="flex gap-4 mt-8">

              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 hover:text-[#0F1A33] transition-all duration-300 flex items-center justify-center">
                <FaFacebookF />
              </a>

              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 hover:text-[#0F1A33] transition-all duration-300 flex items-center justify-center">
                <FaInstagram />
              </a>

              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 hover:text-[#0F1A33] transition-all duration-300 flex items-center justify-center">
                <FaLinkedinIn />
              </a>

              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 hover:text-[#0F1A33] transition-all duration-300 flex items-center justify-center">
                <FaXTwitter />
              </a>

            </div>

          </div>

          {/* quick links */}
          <div>

            <h3 className="text-xl font-semibold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#A9B4CE]">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tutors" className="hover:text-orange-400 transition-all">
                  Tutors
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-orange-400 transition-all">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-sessions" className="hover:text-orange-400 transition-all">
                  My Sessions
                </Link>
              </li>
            </ul>

          </div>

          {/* contact + newsletter */}
          <div>

            <h3 className="text-xl font-semibold mb-7">
              Contact Us
            </h3>

            <div className="space-y-3 text-[#A9B4CE]">
              <p>Chattogram, Bangladesh</p>
              <p>support@mediqueue.com</p>
              <p>+880 1234-567890</p>
            </div>

            {/* newsletter */}
            <div className="mt-8">

              <h4 className="font-semibold mb-4 text-[#F7F3EA]">
                Subscribe Newsletter
              </h4>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full min-w-0 px-4 py-3 rounded-l-xl bg-white/10 border border-white/10 outline-none text-[#F7F3EA] placeholder:text-[#A9B4CE] focus:border-orange-400"
                />

                <button className="bg-orange-500 hover:bg-orange-600 text-[#0F1A33] font-bold px-5 rounded-r-xl transition-all duration-300 shrink-0">
                  Join
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#7C87A3] text-sm">
            © 2026 MediQueue. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-[#7C87A3]">
            <p className="hover:text-orange-400 cursor-pointer transition-all">Privacy Policy</p>
            <p className="hover:text-orange-400 cursor-pointer transition-all">Terms & Conditions</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;