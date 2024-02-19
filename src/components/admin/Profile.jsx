import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "firstName") {
      setFirstName(value);
    } else if (id === "lastName") {
      setLastName(value);
    } else if (id === "gender") {
      setGender(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "mobile") {
      setMobile(value);
    }
  };

  const updateProfileHandler = () => {
    toast.success("Profile Updated");
  };
  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setGender(response.data.gender);
    setEmail(response.data.email);
    setMobile(response.data.mobile);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 text-xl font-bold sm:text-2xl">Profile</h2>
      <div className="mt-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col h-fit border border-indigo-100 bg-white shadow">
          <h3 className="border-b py-4 px-7 text-lg font-medium">
            Personal Information
          </h3>
          <div className="flex flex-col gap-5 p-7">
            <div className="flex flex-row gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-black dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border bg-indigo-50 rounded"
                  placeholder="First Name"
                  onChange={(e) =>
                    inputChangeHandler("firstName", e.target.value)
                  }
                  value={firstName}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-black dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border bg-indigo-50 rounded"
                  placeholder="Last Name"
                  onChange={(e) =>
                    inputChangeHandler("lastName", e.target.value)
                  }
                  value={lastName}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Gender"
                className="block mb-3 text-black dark:text-white"
              >
                Gender
              </label>
              <select
                onChange={(e) => inputChangeHandler("gender", e.target.value)}
                defaultValue={gender}
                className="w-full px-5 py-3 outline-none border bg-indigo-50 rounded"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="Name"
                className="block mb-3 text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 outline-none border bg-indigo-50 rounded"
                placeholder="Email"
                readOnly
                onChange={(e) => inputChangeHandler("email", e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="Mobile"
                className="block mb-3 text-black dark:text-white"
              >
                Mobile
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border bg-indigo-50 rounded"
                placeholder="Mobile number"
                onChange={(e) => inputChangeHandler("mobile", e.target.value)}
                value={mobile}
              />
            </div>
            <button
              onClick={updateProfileHandler}
              className="px-5 py-3 border-none outline-none text-white rounded bg-indigo-500"
            >
              Update Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col h-fit border border-indigo-100 bg-white shadow">
          <h3 className="border-b py-4 px-7 text-lg font-medium">
            Change Password
          </h3>
          <div className="flex flex-col gap-5 p-7">
            <div>
              <label
                htmlFor="Name"
                className="block mb-3 text-black dark:text-white"
              >
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 outline-none border rounded"
                placeholder="Enter Current Password"
              />
            </div>
            <div>
              <label
                htmlFor="Name"
                className="block mb-3 text-black dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 outline-none border rounded"
                placeholder="Enter New Password"
              />
            </div>
            <div>
              <label
                htmlFor="Name"
                className="block mb-3 text-black dark:text-white"
              >
                Re-Enter New Password
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 outline-none border rounded"
                placeholder="Enter Re-Enter New Password"
              />
            </div>
            <button className="px-5 py-3 border-none outline-none text-white rounded bg-indigo-500">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
