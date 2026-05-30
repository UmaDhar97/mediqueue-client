import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1f1b16] text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* logo */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-300 flex items-center justify-center font-bold text-xl">
                M
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  MediQueue
                </h2>

                <p className="text-sm text-gray-400">
                  Smart Tutor Booking
                </p>
              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Book trusted tutors, schedule sessions,
              and improve your learning journey with
              our premium online learning platform.
            </p>

            {/* socials */}
            <div className="flex gap-4 mt-8">

              <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                <FaFacebookF />
              </button>

              <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                <FaInstagram />
              </button>

              <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                <FaLinkedinIn />
              </button>

              <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                <FaXTwitter />
              </button>

            </div>

          </div>

          {/* services */}
          <div>

            <h3 className="text-xl font-semibold mb-7">
              Learning Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Online Tutoring
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Private Sessions
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                IELTS Preparation
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Academic Courses
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Skill Development
              </li>

            </ul>

          </div>

          {/* quick links */}
          <div>

            <h3 className="text-xl font-semibold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Home
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Tutors
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Add Tutor
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                My Sessions
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all">
                Dashboard
              </li>

            </ul>

          </div>

          {/* contact */}
          <div>

            <h3 className="text-xl font-semibold mb-7">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                Chattogram, Bangladesh
              </p>

              <p>
                support@mediqueue.com
              </p>

              <p>
                +880 1234-567890
              </p>

            </div>

            {/* newsletter */}
            <div className="mt-8">

              <h4 className="font-semibold mb-4 text-white">
                Subscribe Newsletter
              </h4>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-l-xl bg-white/10 border border-white/10 outline-none text-white"
                />

                <button className="bg-orange-500 hover:bg-orange-600 px-5 rounded-r-xl transition-all duration-300">
                  Join
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 MediQueue. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <p className="hover:text-orange-400 cursor-pointer transition-all">
              Privacy Policy
            </p>

            <p className="hover:text-orange-400 cursor-pointer transition-all">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;