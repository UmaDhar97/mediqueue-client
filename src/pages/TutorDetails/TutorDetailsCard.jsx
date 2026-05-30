import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const TutorDetailsCard = ({ tutor }) => {

  const { user } = useContext(AuthContext);

  const handleBookSession = async () => {

    try {

      const token = localStorage.getItem("token");

      const bookingData = {
        tutorId: tutor._id,
        tutorName: tutor.tutorName,
        studentEmail: user.email,
        studentName: user.displayName,
        fee: tutor.hourlyFee,
        status: "booked",
      };

      const { data } = await axios.post(
        "http://localhost:5000/bookings",
        bookingData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.insertedId) {

        toast.success("Session Booked Successfully");

      } else {

        toast.error(data.message);
      }

    }
    catch (error) {

      console.log(error);

      toast.error("Booking Failed");
    }
  };

  return (

    <button
      onClick={handleBookSession}
      className="bg-orange-500 text-white px-6 py-3 rounded-xl"
    >
      Book Session
    </button>
  );
};

export default TutorDetailsCard;
