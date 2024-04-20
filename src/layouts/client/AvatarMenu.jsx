import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setRole, setToken, setUser } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function AvatarMenu({ user, setStates }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const name = user.split(" ");
  const Avatar = name[0].charAt(0) + name[1].charAt(0);

  const navigation = [
    { title: "My Profile", path: "/profile" },
    { title: "Orders", path: "/orders" },
    { title: "Notifications", path: "/notifications" },
  ];

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(setUser(null));
    dispatch(setToken(null));
    dispatch(setRole(null));
    navigate("/");
    toast.success("Logout Successful");
  };

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);
  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none bg-red-600 text-white tracking-widest rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          {Avatar}
          {/* <img
            src="src\assets\frontend\assets\img\team\team-1.jpg"
            className="w-full h-full rounded-full"
          /> */}
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <Link
              onClick={() => setStates(false)}
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <button
          onClick={logoutHandler}
          className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3"
        >
          Logout
        </button>
      </ul>
    </div>
  );
}

export default AvatarMenu;
