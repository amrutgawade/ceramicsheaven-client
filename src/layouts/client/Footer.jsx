import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-base lg:text-sm bg-slate-800 text-slate-300">
      <div className="sm:flex py-6 px-4 max-w-screen-xl mx-auto">
        <div className="basis-[40%]">
          <Link className="flex items-center" to="/">
            <img
              src="src\assets\frontend\assets\img\logo.svg"
              height={50}
              width={50}
              alt="CeramicsHeaven logo"
              className="inline-block"
            />
            <span className="sm:text-xl font-extrabold pl-1 text-white">
              Ceramics <span className="text-red-500">Heaven</span>
            </span>
          </Link>
          <p className="mt-2 mb-8 px-2 lg:pr-24 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            possimus non quis alias vel sapiente nisi nemo ipsa impedit dolorem.
          </p>
        </div>
        <div className="sm:grid grid-cols-3 gap-5 sm:ml-8 ml-2 basis-[60%]">
          <div className="text-slate-300">
            <h1 className="mt-2 mb-1 font-bold text-lg">Company</h1>
            <div className="mb-4 w-8 h-1 bg-red-500"></div>
            <ul className="leading-loose">
              <li>
                <a href="#" className="hover:text-slate-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="text-slate-300">
            <h1 className="mt-2 mb-1 font-bold text-lg">Resources</h1>
            <div className="mb-4 w-8 h-1 bg-red-500"></div>
            <ul className="leading-loose">
              <li>
                <a href="#" className="hover:text-slate-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="text-slate-300">
            <h1 className="mt-2 mb-1 font-bold text-lg">About</h1>
            <div className="mb-4 w-8 h-1 bg-red-500"></div>
            <ul className="leading-loose">
              <li>
                <a href="#" className="hover:text-slate-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-400">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 max-w-screen-xl mx-auto text-sm">
        <hr className="border-slate-600" />
        <div className="lg:flex items-center justify-between">
          <p className="my-6 text-center lg:text-start">
            &copy; 2022-{year}{" "}
            <a
              className="text-red-500 hover:text-red-600 font-semibold cursor-pointer"
              target="_blank"
              href="https://freakdevs.in"
            >
              FreakDevs.{" "}
            </a>
            All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-5 text-xl lg:mb-0 mb-4">
            <a href="#" className="hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 rounded-md">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#316FF6] hover:bg-white p-1 rounded-md">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#25D366] hover:bg-white p-1 rounded-md">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-[#1DA1F2] hover:bg-white p-1 rounded-md">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
