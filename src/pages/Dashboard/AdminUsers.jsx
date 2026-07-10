import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_URL } from "../../api/Tutors API Fetch";

const AdminUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${API_URL}/admin/users`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>

      <Helmet>
        <title>MediQueue | All Users</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">All Users</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : users.length === 0 ? (
        <div className="text-center py-20 bg-orange-50 rounded-3xl">
          <p className="text-xl text-gray-600">No users found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl p-4">

          <table className="table w-full">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td>{u.name || "N/A"}</td>
                  <td>{u.email}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        u.role === "admin"
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {u.role || "student"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default AdminUsers;