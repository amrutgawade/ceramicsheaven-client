import React from "react";
import { FcBullish } from "react-icons/fc";
import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: "dashboard",
      label: "Dashboard",
      path: "/admin",
      icon: <HiOutlineViewGrid />,
    },
    {
      key: "profile",
      label: "Profile",
      path: "/admin/profile",
      icon: <HiOutlineUserCircle />,
    },
    {
      key: "products",
      label: "Products",
      path: "/admin/products",
      icon: <HiOutlineCube />,
    },
    {
      key: "orders",
      label: "Orders",
      path: "/admin/orders",
      icon: <HiOutlineShoppingCart />,
    },
    {
      key: "customers",
      label: "Customers",
      path: "/admin/customers",
      icon: <HiOutlineUsers />,
    },
    {
      key: "transactions",
      label: "Transactions",
      path: "/admin/transactions",
      icon: <HiOutlineDocumentText />,
    },
    {
      key: "message",
      label: "Message",
      path: "/admin/message",
      icon: <HiOutlineAnnotation />,
    },
  ];
  const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
      key: "settings",
      label: "Settings",
      path: "/admin/settings",
      icon: <HiOutlineCog />,
    },
    {
      key: "support",
      label: "Help & Support",
      path: "/admin/support",
      icon: <HiOutlineQuestionMarkCircle />,
    },
  ];
  return (
    <div className="flex flex-col p-3 w-60 bg-slate-900 text-white leading-5">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-lg">Ceramics Heaven</span>
      </div>
      <div className="flex-1 inline-flex flex-col gap-1.5 mt-4">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={`${
              pathname === item.path ? "bg-slate-800" : "text-slate-400"
            } flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-800 hover:text-white active:bg-slate-700 text-base`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-600">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={`${
              pathname === item.path ? "bg-slate-800" : "text-slate-400"
            } flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-800 hover:text-white active:bg-slate-700 text-base`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <div className="flex items-center gap-2 px-3 py-2 text-red-500 rounded hover:bg-slate-800 active:bg-slate-700 text-base cursor-pointer">
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
