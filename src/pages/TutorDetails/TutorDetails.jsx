import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { API_URL } from "../../api/Tutors API Fetch";

const TutorDetails = () => {

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const [tutor, setTutor] = useState(null);

  useEffect(() => {

    fetch(`${API_URL}/tutors/${id}`)
      .then(res => res.json())
      .then(data => setTutor(data));

  }, [id]);

  if (!tutor) {
    return <span>Loading...</span>;
  }

  const handleBooking = async () => {

    if (tutor.totalSlot <= 0) {
      return toast.error("No available slots left");
    }

    const bookingData = {
      tutorId: tutor._id,
      tutorName: tutor.tutorName,
      studentName: user.displayName,
      studentEmail: user.email,
      status: "booked",
    };

    try {

      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        `${API_URL}/bookings`,
        bookingData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.insertedId) {

        toast.success("Session Booked Successfully");
      }

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-5">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src={tutor.photo}
          className="rounded-3xl h-[500px] w-full object-cover"
        />

        <div>

          <h2 className="text-5xl font-bold mb-5">
            {tutor.tutorName}
          </h2>

          <p className="text-xl text-gray-500 mb-3">
            {tutor.subject}
          </p>

          <p className="mb-3">
            Fee: ${tutor.hourlyFee}
          </p>

          <p className="mb-3">
            Available Slot: {tutor.totalSlot}
          </p>

          <p className="mb-3">
            Teaching Mode: {tutor.teachingMode}
          </p>

          <button
            onClick={handleBooking}
            className="mt-6 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold"
          >
            Book Session
          </button>

        </div>

      </div>
    </div>
  );
};

export default TutorDetails;