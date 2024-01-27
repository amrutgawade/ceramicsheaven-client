import React from "react";
import { FiUser } from "react-icons/fi";

function Profile() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 text-xl font-bold sm:text-2xl">Profile</h2>
      <div className="flex flex-col justify-center mt-6 bg-white shadow">
        <h3 className="border-b py-4 px-7">Personal Information</h3>
        <div className="p-7">
          <div className="mb-4 flex flex-col gap-5.5">
            <form action="#">
              {/* <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="fullName"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4">
                      <FiUser />
                    </span>
                    <input
                      type="text"
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      id="fullName"
                      placeholder="David John"
                      value={"David John"}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="phoneNumber"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    placeholder="+91 9988779595"
                    value={"+91 9988779595"}
                  />
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
