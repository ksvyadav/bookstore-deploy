import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../url.js";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = async () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("users");
      await axios.post(`${baseUrl}/user/logout`); //this sends post request with user data from submit.

      toast.success("Logout Sucessfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error : " + error.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="btn px-2 py-1 bg-red-500 text-white 
      font-semibold rounded-lg cursor-pointer hover:bg-red-900"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
