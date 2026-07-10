import axios from "axios";

// BEFORE: API_URL was hardcoded to "http://localhost:5000"
// That means after you deployed the client (Vercel/Netlify), every
// single request from this file still tried to hit YOUR OWN laptop's
// localhost:5000, which doesn't exist on the visitor's machine.
// That is the #1 reason most pages/routes look "broken" in production.
export const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;

// Get all tutors
export const getTutors = async () => {
  const { data } = await axiosInstance.get("/tutors");
  return data;
};

// Get tutor by ID
export const getTutorById = async (id) => {
  const { data } = await axiosInstance.get(`/tutors/${id}`);
  return data;
};