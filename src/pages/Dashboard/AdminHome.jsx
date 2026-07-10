import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaUsers, FaChalkboardTeacher, FaCalendarCheck } from "react-icons/fa";
import { API_URL } from "../../api/Tutors API Fetch";

const AdminHome = () => {

  const navigate = useNavigate();

  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${API_URL}/admin-stats`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then(res => setStats(res.data))
      .catch(() => setStats(null));
  }, []);

  const cards = [
    {
      label: "Total Users",
      value: stats?.totalUsers,
      icon: <FaUsers />,
      onClick: () => navigate("/dashboard/admin-users"),
    },
    {
      label: "Total Tutors",
      value: stats?.totalTutors,
      icon: <FaChalkboardTeacher />,
      onClick: () => navigate("/dashboard/manage-tutors"),
    },
    {
      label: "Total Booked Sessions",
      value: stats?.totalBookings,
      icon: <FaCalendarCheck />,
      onClick: () => navigate("/dashboard/admin-bookings"),
    },
  ];

  return (
    <div>

      <Helmet>
        <title>MediQueue | Admin Dashboard</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">Admin Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((card) => (
          <button
            key={card.label}
            onClick={card.onClick}
            className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-5 text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl text-orange-500 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
              {card.icon}
            </div>

            <div>
              <p className="text-gray-500">{card.label}</p>
              <h3 className="text-3xl font-bold text-gray-800">
                {card.value ?? "..."}
              </h3>
              <p className="text-xs text-orange-500 font-semibold mt-1">
                View details &rarr;
              </p>
            </div>
          </button>
        ))}

      </div>

    </div>
  );
};

export default AdminHome;