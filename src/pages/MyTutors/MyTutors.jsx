import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const MyTutors = () => {

  const { user } = useContext(AuthContext);

  const [tutors, setTutors] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get(
      `http://localhost:5000/myTutors?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => setTutors(res.data));

  }, [user]);

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/tutors/${id}`
      );

      const remaining = tutors.filter(
        tutor => tutor._id !== id
      );

      setTutors(remaining);

      toast.success("Tutor Deleted");

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-5">

      <h2 className="text-4xl font-bold mb-10">
        My Tutors
      </h2>

      <div className="overflow-x-auto">

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Fee</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {
              tutors.map(tutor => (
                <tr key={tutor._id}>

                  <td>{tutor.tutorName}</td>

                  <td>{tutor.subject}</td>

                  <td>${tutor.hourlyFee}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(tutor._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
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

export default MyTutors;