import React from "react";
import { UserAuth } from "../context/AuthContext";
import { logout } from "../functions/auth";

const UserDashboard = () => {
  const { user } = UserAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div>Welcome {user?.firstname}</div>
      <div>
        <button onClick={handleLogout} className="bg-black text-white px-16 py-2 rounded-ld">
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
