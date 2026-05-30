import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddTutor = () => {

  const { user } = useContext(AuthContext);

  const handleAddTutor = async (e) => {

    e.preventDefault();

    const form = e.target;

    const tutorData = {
      tutorName: form.tutorName.value,
      photo: form.photo.value,
      subject: form.subject.value,
      availableDays: form.availableDays.value,
      availableTime: form.availableTime.value,
      hourlyFee: parseInt(form.hourlyFee.value),
      totalSlot: parseInt(form.totalSlot.value),
      sessionDate: form.sessionDate.value,
      institution: form.institution.value,
      experience: form.experience.value,
      location: form.location.value,
      teachingMode: form.teachingMode.value,

      email: user?.email,
      createdBy: user?.displayName,
    };

    try {

      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        "http://localhost:5000/tutors",
        tutorData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.insertedId) {

        toast.success("Tutor Added Successfully");

        form.reset();
      }

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-5">

      <Helmet>
        <title>MediQueue | Add Tutor</title>
      </Helmet>

      <div className="bg-white p-10 rounded-3xl shadow-xl">

        <h2 className="text-4xl font-bold text-center mb-10">
          Add Tutor
        </h2>

        <form
          onSubmit={handleAddTutor}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            name="tutorName"
            type="text"
            placeholder="Tutor Name"
            className="border p-4 rounded-xl"
            required
          />

          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="border p-4 rounded-xl"
            required
          />

          <select
            name="subject"
            className="border p-4 rounded-xl"
          >
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
          </select>

          <input
            name="availableDays"
            type="text"
            placeholder="Available Days"
            className="border p-4 rounded-xl"
          />

          <input
            name="availableTime"
            type="text"
            placeholder="Available Time"
            className="border p-4 rounded-xl"
          />

          <input
            name="hourlyFee"
            type="number"
            placeholder="Hourly Fee"
            className="border p-4 rounded-xl"
          />

          <input
            name="totalSlot"
            type="number"
            placeholder="Total Slot"
            className="border p-4 rounded-xl"
          />

          <input
            name="sessionDate"
            type="date"
            className="border p-4 rounded-xl"
          />

          <input
            name="institution"
            type="text"
            placeholder="Institution"
            className="border p-4 rounded-xl"
          />

          <input
            name="experience"
            type="text"
            placeholder="Experience"
            className="border p-4 rounded-xl"
          />

          <input
            name="location"
            type="text"
            placeholder="Location"
            className="border p-4 rounded-xl"
          />

          <select
            name="teachingMode"
            className="border p-4 rounded-xl"
          >
            <option>Online</option>
            <option>Offline</option>
            <option>Both</option>
          </select>

          <button
            className="md:col-span-2 bg-orange-500 text-white py-4 rounded-xl font-bold"
          >
            Submit Tutor
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddTutor;