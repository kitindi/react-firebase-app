import React, { useState } from "react";
import { signup } from "../functions/auth";

const CreateUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = { firstname, lastname, email };

  const handleCreateUser = () => {
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else if (!password) {
      console.log("Password is required");
      return;
    } else if (!email) {
      console.log("Email is required");
      return;
    } else {
      signup(email, password, userData);
    }
  };
  return (
    <div className="w-full max-w-6xl h-[80vh] mx-auto flex items-center justify-center">
      <div className=" min-w-[450px] h-fit  p-8 flex flex-col gap-4">
        <div className="w-full">
          <input type="text" placeholder="Firstname" className="w-full" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="w-full">
          <input type="text" placeholder="Lastname" className="w-full" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="w-full">
          <input type="email" placeholder="Email" className="w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="w-full">
          <input type="password" placeholder="Password" className="w-full" value={password} onChange={(e) => setPassoword(e.target.value)} />
        </div>
        <div className="w-full">
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="w-full">
          <button type="submit" className="w-full bg-emerald-600 text-white px-16 py-2" onClick={handleCreateUser}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
