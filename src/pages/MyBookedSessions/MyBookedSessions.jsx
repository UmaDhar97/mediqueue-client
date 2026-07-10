import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { API_URL } from "../../api/Tutors API Fetch";

const MyBookedSessions = () => {

  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get(
      `${API_URL}/bookings?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => setBookings(res.data));

  }, [user]);

  const handleCancel = async (id) => {

    try {

      await axios.patch(
        `${API_URL}/bookings/${id}`
      );

      const remaining = bookings.filter(
        booking => booking._id !== id
      );

      setBookings(remaining);

      toast.success("Booking Cancelled");

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-5">

      <h2 className="text-4xl font-bold mb-10">
        My Sessions
      </h2>

      <div className="overflow-x-auto">

        <table className="table">

          <thead>
            <tr>
              <th>Tutor</th>
              <th>Student</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {
              bookings.map(booking => (
                <tr key={booking._id}>

                  <td>{booking.tutorName}</td>

                  <td>{booking.studentName}</td>

                  <td>{booking.studentEmail}</td>

                  <td>{booking.status}</td>

                  <td>
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default MyBookedSessions;