import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import TutorCard from "../../components/cards/TutorCard";

const Home = () => {

  const tutors = [
    {
      _id: 1,
      tutorName: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      subject: "Mathematics",
      fee: 25,
      location: "New York",
      experience: 5,
    },

    {
      _id: 2,
      tutorName: "Michael Lee",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      subject: "Physics",
      fee: 30,
      location: "California",
      experience: 6,
    },

    {
      _id: 3,
      tutorName: "Emma Watson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      subject: "English",
      fee: 20,
      location: "London",
      experience: 4,
    },
  ];

  return (
    <div className="bg-[#fffaf5] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">

        {/* background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-orange-500 font-semibold mb-4 tracking-wider uppercase">
              Smart Tutor Booking Platform
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
              Learn From
              <span className="text-orange-500">
                {" "}
                Expert{" "}
              </span>
              Tutors Online
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Book trusted tutors, manage sessions,
              and improve your learning experience
              with MediQueue’s premium tutor
              booking system.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-5 mt-8">

              <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-xl shadow-orange-200">

                Explore Tutors

                <FaArrowRight />

              </button>

              <button className="border-2 border-orange-400 text-orange-500 hover:bg-orange-50 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                Become Tutor
              </button>

            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  5K+
                </h2>

                <p className="text-gray-500 mt-1">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  800+
                </h2>

                <p className="text-gray-500 mt-1">
                  Tutors
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  98%
                </h2>

                <p className="text-gray-500 mt-1">
                  Success
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-300 rounded-[40px] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136"
                alt="Tutor"
                className="relative z-10 w-[450px] rounded-[40px] object-cover shadow-2xl"
              />

              {/* floating card */}
              <div className="absolute -bottom-8 -left-10 bg-white p-5 rounded-3xl shadow-2xl z-20 w-60">

                <div className="flex items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>

                    <h4 className="font-bold text-gray-800">
                      Sarah Johnson
                    </h4>

                    <p className="text-sm text-gray-500">
                      Mathematics Tutor
                    </p>

                  </div>

                </div>

                <button className="mt-4 bg-orange-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all">
                  Book Session
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TUTORS SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Expert Tutors
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Featured Tutors
            </h2>

            <p className="max-w-2xl mx-auto text-gray-500 mt-6 leading-relaxed">
              Learn from experienced tutors and improve
              your academic skills with personalized
              online learning sessions.
            </p>

          </div>

          {/* cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {tutors.map((tutor) => (
              <TutorCard
                key={tutor._id}
                tutor={tutor}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;