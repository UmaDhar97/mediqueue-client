import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Your message has been sent. We'll get back to you soon.");
  };

  return (
    <div>

      <Helmet>
        <title>MediQueue | Report / Contact</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">Report / Contact</h2>

      <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl">

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            rows="6"
            placeholder="Describe your issue or feedback..."
            className="w-full border p-4 rounded-xl"
            required
          ></textarea>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;