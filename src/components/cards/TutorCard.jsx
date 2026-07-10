import { useState } from "react";
import { FaStar, FaClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TutorCard = ({ tutor }) => {

  const navigate = useNavigate();

  const [imgError, setImgError] = useState(false);

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

  const photoUrl = image || photo;
  const displayFee = fee || hourlyFee;

  const initials = (tutorName || "T")
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleBookSession = () => {
    if (!_id) return;
    navigate(`/tutor/${_id}`);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">

      {/* image / fallback avatar */}
      <div className="relative h-56 bg-gradient-to-br from-orange-100 to-amber-50 shrink-0">

        {photoUrl && !imgError ? (
          <img
            src={photoUrl}
            alt={tutorName}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
              {initials}
            </div>
          </div>
        )}

        {subject && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
            {subject}
          </span>
        )}

      </div>

      {/* content */}
      <div className="p-6 flex flex-col flex-1">

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-xl font-bold text-gray-800 leading-snug line-clamp-1">
            {tutorName || "Unnamed Tutor"}
          </h3>

          <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm shrink-0">
            <FaStar />
            4.9
          </div>

        </div>

        <div className="mt-3 space-y-1.5 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <IoLocationOutline className="shrink-0" />
            <span className="line-clamp-1">{location || "Location not specified"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="shrink-0" />
            <span className="line-clamp-1">{experience || "N/A"} years experience</span>
          </div>

        </div>

        {/* footer pinned to bottom so all cards line up evenly */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">

          <div className="min-w-0">
            <p className="text-xs text-gray-400">Hourly Fee</p>
            <p className="text-2xl font-bold text-orange-500 truncate">
              ${Number(displayFee || 0).toLocaleString()}
            </p>
          </div>

          <button
            onClick={handleBookSession}
            className="shrink-0 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap"
          >
            Book Session
          </button>

        </div>

      </div>

    </div>
  );
};

export default TutorCard;