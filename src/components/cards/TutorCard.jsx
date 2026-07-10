import { FaStar, FaClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TutorCard = ({ tutor }) => {

  const navigate = useNavigate();

  const {
    _id,
    tutorName,
    image,
    photo,
    subject,
    fee,
    hourlyFee,
    location,
    experience,
  } = tutor;

  // BEFORE: this button had no onClick / no <Link>, so clicking
  // "Book Session" on Home & Tutors pages did absolutely nothing.
  const handleBookSession = () => {
    if (!_id) return; // dummy/static card without a real db id
    navigate(`/tutor/${_id}`);
  };

  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 group">

      {/* image */}
      <div className="overflow-hidden relative">

        <img
          src={image || photo}
          alt={tutorName}
          className="h-[260px] w-full object-cover group-hover:scale-110 transition-all duration-700"
        />

        <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          {subject}
        </div>

      </div>

      {/* content */}
      <div className="p-7">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-gray-800">
            {tutorName}
          </h2>

          <div className="flex items-center gap-2 text-orange-500 font-semibold">
            <FaStar />
            4.9
          </div>

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-4">

          <IoLocationOutline />

          <p>{location}</p>

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-2">

          <FaClock />

          <p>{experience} Years Experience</p>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <div>

            <p className="text-gray-500 text-sm">
              Hourly Fee
            </p>

            <h3 className="text-3xl font-bold text-orange-500">
              ${fee || hourlyFee}
            </h3>

          </div>

          <button
            onClick={handleBookSession}
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-orange-100"
          >
            Book Session
          </button>

        </div>

      </div>

    </div>
  );
};

export default TutorCard;