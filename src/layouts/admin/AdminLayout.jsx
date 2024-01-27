import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
