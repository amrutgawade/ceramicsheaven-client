import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function SignUp() {
  const { setUser, setToken } = useContext(UserContext);
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "username") {
      setUserame(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <main className="w-full flex flex-col items-center justify-center py-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img src="src\assets\frontend\assets\img\logo.svg" width={100} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 font-bold text-3xl">Sign-up</h3>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              onChange={(e) => inputChangeHandler("username", e.target.value)}
              value={username}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              onChange={(e) => inputChangeHandler("password", e.target.value)}
              value={password}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
            Sign Up
          </button>
          <div className="text-center">
            <Link to="/Forgot-Password" className="hover:text-red-600">
              Forgot Password ?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
