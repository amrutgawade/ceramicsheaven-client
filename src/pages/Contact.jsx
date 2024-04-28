import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl text-center font-semibold mt-8">
        Contact US
      </h1>
      <div className="h-1 w-16 bg-red-500 mx-auto mt-1"></div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8 px-4 md:px-0 md:gap-24 md:my-16">
          <div className="flex">
            <div>
              <FaLocationDot size={20} className="h-fit mt-1.5 mr-6" />
            </div>
            <div className="h-full">
              <p className="text-lg font-semibold">Shop address:</p>
              <p>E99, MIDC, beside Dmart, Ratnagiri, Maharashtra - 415612</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaPhone size={20} className="h-fit mt-1.5 mr-6" />
            </div>
            <div className="h-full">
              <p className="text-lg font-semibold">Phone no:</p>
              <p>+ 91 987654321</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaEnvelope size={20} className="h-fit mt-1.5 mr-6" />
            </div>
            <div className="h-full">
              <p className="text-lg font-semibold">Email id:</p>
              <p>info@ceramicsheavan.com</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-16">
          <div className="md:w-1/2 px-4 pt-2 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.5566917662704!2d73.34370287472986!3d16.996342513953373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0dc37e1305c5%3A0xe06bd4e11bd60c4a!2sMalushte%20Plumbing%20and%20ceramics!5e0!3m2!1sen!2sin!4v1714329983180!5m2!1sen!2sin"
              className="block h-full w-full rounded shadow-lg border min-h-64 "
            ></iframe>
          </div>
          <div className="md:w-1/2 md:px-10 px-4 mb-8">
            <h1 className="text-3xl font-semibold mb-4">Get In Touch</h1>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* <div>
                <label className="font-medium">Company</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div> */}
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
