import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import TutorCard from "../../components/cards/TutorCard";
import { API_URL } from "../../api/Tutors API Fetch";

const heroImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1544717305-2782549b5136",
];

const stats = [
  { icon: <FaChalkboardTeacher />, value: "50+", label: "Expert Tutors" },
  { icon: <FaBookOpen />, value: "20+", label: "Subjects Covered" },
  { icon: <FaUserGraduate />, value: "500+", label: "Happy Students" },
];

const Home = () => {

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/homeTutors`)
      .then(res => res.json())
      .then(data => {
        setTutors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#fffaf5] overflow-hidden">

      <Helmet>
        <title>MediQueue | Home</title>
      </Helmet>

      {/* HERO SECTION - split layout: text/stats left, image carousel right */}
      <section className="relative py-16 lg:py-24">

        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              <FaStar /> Trusted by 500+ students
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
              Find Your Perfect <span className="text-orange-500">Tutor</span>,
              Learn At Your Own Pace
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
              MediQueue connects you with verified tutors for one-on-one online
              sessions — no scheduling conflicts, no manual back-and-forth.
              Just book a slot and start learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/tutors"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-orange-200"
              >
                Explore Tutors <FaArrowRight />
              </Link>

              <a
                href="#available-tutors"
                className="inline-flex items-center gap-3 border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold"
              >
                See How It Works
              </a>

            </div>

            {/* stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-orange-500 text-xl mb-2">{s.icon}</div>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT: image carousel card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-1 pr-4"
          >

            {/* image card - own stacking context, sits below the badge */}
            <div className="relative z-0 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">

              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-[420px] lg:h-[500px]"
              >
                {heroImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt="Tutor session"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

            {/* floating badge - moved to top-right so it never collides
                with the Swiper's pagination dots at the bottom of the image */}
            <div className="absolute -top-6 -right-4 lg:-right-8 z-20 bg-white rounded-3xl shadow-xl px-6 py-5 hidden sm:block">
              <p className="text-3xl font-bold text-orange-500 leading-none">4.9<span className="text-lg">/5</span></p>
              <p className="text-sm text-gray-500 mt-1">Average Rating</p>
            </div>

          </motion.div>

        </div>

      </section>

      {/* AVAILABLE TUTORS SECTION */}
      <section id="available-tutors" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Expert Tutors
            </p>

            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Available Tutors
            </h2>

            <p className="max-w-2xl mx-auto text-gray-500 mt-6 leading-relaxed">
              Learn from experienced tutors and improve your academic
              skills with personalized online learning sessions.
            </p>

          </div>

          {loading ? (
            <p className="text-center mt-16 text-gray-500">Loading tutors...</p>
          ) : tutors.length === 0 ? (
            <p className="text-center mt-16 text-gray-500">
              No tutors available right now.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {tutors.map((tutor) => (
                <TutorCard key={tutor._id} tutor={tutor} />
              ))}
            </div>
          )}

        </div>

      </section>

      {/* EXTRA SECTION 1: How it works */}
      <section className="py-24 bg-[#fffaf5]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10 text-center">

          {[
            { step: "01", title: "Find a Tutor", text: "Search by subject, location or teaching mode." },
            { step: "02", title: "Book a Slot", text: "Pick an available time and confirm instantly." },
            { step: "03", title: "Start Learning", text: "Join your session and track it from your dashboard." },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-3xl p-10 shadow-lg">
              <p className="text-4xl font-bold text-orange-400">{item.step}</p>
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-500 mt-3">{item.text}</p>
            </div>
          ))}

        </div>

      </section>

      {/* EXTRA SECTION 2: Why MediQueue */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">Why Choose MediQueue?</h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            We remove the back-and-forth of manual scheduling, prevent time-slot
            conflicts automatically, and keep every booking organized in one place
            so students can focus on learning, not logistics.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Home;