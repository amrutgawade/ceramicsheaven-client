import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function MasterLayout() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen max-h-full flex flex-col">
        <Navbar />
        <main className="md:py-8 md:min-h-[80vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MasterLayout;
