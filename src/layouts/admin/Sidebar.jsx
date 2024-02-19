import React, { useContext } from "react";
import { FaSquarePollVertical } from "react-icons/fa6";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import toast from "react-hot-toast";

function Sidebar() {
  const { setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();
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
      key: "complaints",
      label: "Complaints",
      path: "/admin/complaints",
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

  const logoutHandler = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
    navigate("/admin");
    toast.success("Logout Successful");
  };
  return (
    <aside className="flex flex-col p-6 h-screen w-[19%] bg-slate-900 text-white leading-5">
      <Link to={"/admin"} className="flex items-center gap-4 px-3 py-3">
        <FaSquarePollVertical fontSize={30} className="text-indigo-500" />
        <span className="text-xl font-bold">
          Ceramics <span className="text-red-500">Heaven</span>
        </span>
      </Link>
      <div className="flex-1 inline-flex flex-col gap-1.5 mt-6">
        <h3 className="mb-2 ml-4 text-sm font-semibold text-slate-500">MENU</h3>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={`${
              pathname === item.path ? "bg-slate-800" : "text-slate-400"
            } flex items-center gap-6 px-3 py-2 rounded hover:bg-slate-800 hover:text-white active:bg-slate-700 text-base`}
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
            } flex items-center gap-6 px-3 py-2 rounded hover:bg-slate-800 hover:text-white active:bg-slate-700 text-base`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <button
          onClick={logoutHandler}
          className="flex items-center gap-6 px-3 py-2 text-red-500 rounded border-none hover:bg-slate-800 active:bg-slate-700 text-base"
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
