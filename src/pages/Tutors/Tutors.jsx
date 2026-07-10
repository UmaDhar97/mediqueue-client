import { useEffect, useState } from "react";
import TutorCard from "../../components/cards/TutorCard";
import { API_URL } from "../../api/Tutors API Fetch";

const Tutors = () => {

  const [tutors, setTutors] = useState([]);

  useEffect(() => {

    fetch(`${API_URL}/tutors`)
      .then(res => res.json())
      .then(data => setTutors(data));

  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">

      <h2 className="text-4xl font-bold text-center mb-10">
        All Tutors
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          tutors.map(tutor => (
            <TutorCard
              key={tutor._id}
              tutor={tutor}
            ></TutorCard>
          ))
        }

      </div>

    </div>
  )
}

export default Tutors