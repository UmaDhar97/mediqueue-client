import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-3xl p-10 text-center w-[400px]">

        <img
          className="w-28 h-28 rounded-full mx-auto"
          src={user?.photoURL}
          alt=""
        />

        <h2 className="text-3xl font-bold mt-5">
          {user?.displayName}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

      </div>

    </div>
  );
};

export default Profile;