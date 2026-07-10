import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { API_URL } from "../../api/Tutors API Fetch";

const MyTutors = () => {

  const { user } = useContext(AuthContext);

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [deleteTarget, setDeleteTarget] = useState(null); // tutor id pending delete confirm
  const [editTutor, setEditTutor] = useState(null); // tutor object being edited

  const fetchTutors = () => {
    const token = localStorage.getItem("token");

    if (!user?.email) return;

    setLoading(true);

    // BEFORE: this called /myTutors on the server, but that route
    // never existed, so this request always failed silently (404).
    axios.get(
      `${API_URL}/myTutors?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => setTutors(res.data))
      .catch(() => toast.error("Failed to load your tutors"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTutors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const confirmDelete = async () => {
    const id = deleteTarget;
    setDeleteTarget(null);

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${API_URL}/tutors/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setTutors(prev => prev.filter(tutor => tutor._id !== id));

      toast.success("Tutor Deleted");

    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      tutorName: form.tutorName.value,
      subject: form.subject.value,
      hourlyFee: parseInt(form.hourlyFee.value),
      totalSlot: parseInt(form.totalSlot.value),
    };

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/tutors/${editTutor._id}`,
        updatedData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setTutors(prev =>
        prev.map(t => t._id === editTutor._id ? { ...t, ...updatedData } : t)
      );

      toast.success("Tutor Updated");

      setEditTutor(null);

    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-5">

      <Helmet>
        <title>MediQueue | My Tutors</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">
        My Tutors
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : tutors.length === 0 ? (
        <div className="text-center py-20 bg-orange-50 rounded-3xl">
          <p className="text-xl text-gray-600">
            You haven't added any tutors yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="table w-full">

            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Fee</th>
                <th>Total Slot</th>
                <th>Update</th>
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

                    <td>{tutor.totalSlot}</td>

                    <td>
                      <button
                        onClick={() => setEditTutor(tutor)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                      >
                        Update
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() => setDeleteTarget(tutor._id)}
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
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Delete this tutor?</h3>
            <p className="text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-6 py-3 rounded-xl border"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-6 py-3 rounded-xl bg-red-500 text-white"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPDATE MODAL - pre-filled form */}
      {editTutor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-6">Update Tutor</h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                name="tutorName"
                defaultValue={editTutor.tutorName}
                className="w-full border p-3 rounded-xl"
                placeholder="Tutor Name"
                required
              />

              <input
                name="subject"
                defaultValue={editTutor.subject}
                className="w-full border p-3 rounded-xl"
                placeholder="Subject"
                required
              />

              <input
                name="hourlyFee"
                type="number"
                defaultValue={editTutor.hourlyFee}
                className="w-full border p-3 rounded-xl"
                placeholder="Hourly Fee"
                required
              />

              <input
                name="totalSlot"
                type="number"
                defaultValue={editTutor.totalSlot}
                className="w-full border p-3 rounded-xl"
                placeholder="Total Slot"
                required
              />

              <div className="flex gap-4 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setEditTutor(null)}
                  className="px-6 py-3 rounded-xl border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-orange-500 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyTutors;