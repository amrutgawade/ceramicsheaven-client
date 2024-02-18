import React from "react";

function Profile() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 text-xl font-bold sm:text-2xl">Profile</h2>
      <div className="mt-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col justify-center bg-white shadow">
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
                  className="w-full px-5 py-3 outline-none border rounded"
                  placeholder="First Name"
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
                  className="w-full px-5 py-3 outline-none border rounded"
                  placeholder="Last Name"
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
                className="w-full px-5 py-3 outline-none border rounded"
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
                className="w-full px-5 py-3 outline-none border rounded"
                placeholder="Email"
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
                className="w-full px-5 py-3 outline-none border rounded"
                placeholder="Mobile number"
              />
            </div>
            <button className="px-5 py-3 border-none outline-none text-white rounded bg-indigo-500">
              Update Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white shadow">
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
