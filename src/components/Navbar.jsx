import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div className="w-full">
      <nav className="w-full max-w-6xl mx-auto  flex items-center justify-between py-3">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center space-x-8">
          {" "}
          <Link to="/login" className="px-8 py-2 border border-emerald-400 rounded-full">
            Log in
          </Link>
          <Link to="/create-user" className="px-8 py-2 bg-emerald-600 text-white rounded-full">
            Sign Up
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
