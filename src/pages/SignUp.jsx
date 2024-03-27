import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "firstName") {
      setFirstName(value);
    } else if (id === "lastName") {
      setLastName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "mobile") {
      setMobile(value);
    } else if (id === "gender") {
      setGender(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const validationHandler = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      toast.error("Password didn't matched");
      return false;
    }
  };

  const registerHandler = async () => {
    if (validationHandler()) {
      const user = {
        firstName,
        lastName,
        email,
        mobile,
        gender,
        password,
      };

      console.log(user);
      const response = await axios
        .post("http://localhost:8081/auth/signup", user)
        .then((res) => {
          console.log(res.data);
          toast.success("Signup Success");
          navigate("/login");
        })
        .catch((err) => {
          try {
            // console.log(err.response.data.message);
            if (
              err.response.data.message ==
              "Email already exist for another user"
            ) {
              toast.error("User Already Exists");
            }
          } catch (error) {
            toast.error("Server Error");
          }
        });
    }
  };

  const resetHandler = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setGender("");
    setPassword("");
    setConfirmPassword("");
    setPasswordVisible(false);
    setConfirmPasswordVisible(false);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center py-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="src\assets\frontend\assets\img\logo.svg"
            width={100}
            className="mx-auto"
          />
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
            <label className="font-medium">First Name</label>
            <input
              type="text"
              onChange={(e) => inputChangeHandler("firstName", e.target.value)}
              value={firstName}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              onChange={(e) => inputChangeHandler("lastName", e.target.value)}
              value={lastName}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              onChange={(e) => inputChangeHandler("email", e.target.value)}
              value={email}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Mobile</label>
            <input
              type="text"
              onChange={(e) => inputChangeHandler("mobile", e.target.value)}
              value={mobile}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Gender</label>
            <select
              onChange={(e) => inputChangeHandler("gender", e.target.value)}
              value={gender}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="relative">
            <label className="font-medium">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              required
              onChange={(e) => inputChangeHandler("password", e.target.value)}
              value={password}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
            {passwordVisible ? (
              <FaEyeSlash
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="text-xl cursor-pointer absolute top-11 right-3"
              />
            ) : (
              <FaEye
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="text-xl cursor-pointer absolute top-11 right-3"
              />
            )}
          </div>
          <div className="relative">
            <label className="font-medium">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              onChange={(e) =>
                inputChangeHandler("confirmPassword", e.target.value)
              }
              value={confirmPassword}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
            {confirmPasswordVisible ? (
              <FaEyeSlash
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="text-xl cursor-pointer absolute top-11 right-3"
              />
            ) : (
              <FaEye
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="text-xl cursor-pointer absolute top-11 right-3"
              />
            )}
          </div>
          <button
            onClick={registerHandler}
            className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
          >
            Sign Up
          </button>
          <button
          type="submit"
            onClick={resetHandler}
            className="w-full px-4 py-2 text-white font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-700 rounded-lg duration-150"
          >
            Reset
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
