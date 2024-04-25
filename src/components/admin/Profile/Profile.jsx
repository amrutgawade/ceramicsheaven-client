import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAxiosInstance } from "../Utility/axiosApiConfig";
import { useSelector } from "react-redux";

function Profile() {
  const { token } = useSelector((state) => state.auth);
  const axiosInstance = getAxiosInstance();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
    } else if (id === "oldPassword") {
      setOldPassword(value);
    } else if (id === "newPassword") {
      setNewPassword(value);
    } else if (id === "confirmNewPassword") {
      setConfirmNewPassword(value);
    }
  };

  const updateProfileHandler = async () => {
    const updateUser = {
      firstName,
      lastName,
      email,
      gender,
      mobile: Number(mobile),
    };
    // console.log(updateUser);
    const response = await axiosInstance
      .put("http://localhost:8081/api/users/profile/update", updateUser)
      .then((res) => {
        toast.success("Profile Updated");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Profile Update Failed");
      });
  };

  const updatePasswordHandler = async () => {
    if (oldPassword == "" || newPassword == "" || confirmNewPassword == "") {
      toast.error("Please fill all fields");
    } else if (oldPassword == newPassword) {
      toast.error("Current & New Password must be differet");
    } else if (newPassword != confirmNewPassword) {
      toast.error("Confirm Password Doesn't Match");
    } else {
      const updatePassword = {
        currentPassword: oldPassword,
        newPassword,
      };
      // console.log(updatePassword);
      const response = await axiosInstance
        .post(
          "http://localhost:8081/api/users/profile/updatePassword",
          updatePassword
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data.message == "Current password is not valid") {
            toast.error(res.data.message);
          } else {
            toast.success(res.data.message);
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          }
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Wrong Old Password");
        });
    }
  };

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
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
                value={gender}
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
                onChange={(e) =>
                  inputChangeHandler("oldPassword", e.target.value)
                }
                value={oldPassword}
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
                onChange={(e) =>
                  inputChangeHandler("newPassword", e.target.value)
                }
                value={newPassword}
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
                onChange={(e) =>
                  inputChangeHandler("confirmNewPassword", e.target.value)
                }
                value={confirmNewPassword}
              />
            </div>
            <button
              className="px-5 py-3 border-none outline-none text-white rounded bg-indigo-500"
              onClick={updatePasswordHandler}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
