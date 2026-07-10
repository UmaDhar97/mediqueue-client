import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_URL } from "../../api/Tutors API Fetch";

const AdminBookings = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${API_URL}/admin/bookings`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then(res => setBookings(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>

      <Helmet>
        <title>MediQueue | All Booked Sessions</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">All Booked Sessions</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : bookings.length === 0 ? (
        <div className="text-center py-20 bg-orange-50 rounded-3xl">
          <p className="text-xl text-gray-600">No booked sessions yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl p-4">

          <table className="table w-full">

            <thead>
              <tr>
                <th>Tutor</th>
                <th>Student</th>
                <th>Student Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map(b => (
                <tr key={b._id}>
                  <td>{b.tutorName}</td>
                  <td>{b.studentName}</td>
                  <td>{b.studentEmail}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        b.status === "cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {b.status || "confirmed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default AdminBookings;