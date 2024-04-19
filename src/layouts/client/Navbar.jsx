import React, { useEffect, useState } from "react";
import AvatarMenu from "./AvatarMenu";
import logo from "../../assets/frontend/img/logo.svg";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../components/admin/Utility/axiosApiConfig";
import {
  addCartItem,
  seTotalPrice,
  setDiscount,
  setTotalDiscountedPrice,
  setTotalItem,
} from "../../features/cart/cartSlice";

function Navbar() {
  const { token, user } = useSelector((state) => state.auth);
  const { totalItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Store", path: "/store" },
    { title: "Contact", path: "/contact" },
  ];

  const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/cart/", {})
      .then((res) => {
        const data = res.data;
        dispatch(addCartItem(data.cartItems));
        dispatch(setTotalItem(data.totalItem));
        dispatch(seTotalPrice(data.totalPrice));
        dispatch(setTotalDiscountedPrice(data.totalDiscountedPrice));
        dispatch(setDiscount(data.discount));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [totalItem]);

  return (
    <header className="bg-white text-base lg:text-sm shadow-md sticky top-0 z-50">
      <div
        className={`bg-white items-center gap-x-14 px-4 md:px-0 max-w-screen-xl mx-auto lg:flex lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link className="flex items-center" to="/">
            <img
              src={logo}
              height={50}
              width={50}
              alt="CeramicsHeaven logo"
              className="inline-block"
            />
            <span className="sm:text-xl font-extrabold pl-1">
              Ceramics <span className="text-red-500">Heaven</span>
            </span>
          </Link>

          <div className="lg:hidden flex gap-8">
            {token && (
              <Link to={"/cart"} className="lg:hidden relative text-2xl">
                <span className="absolute text-center text-[10px] text-white -top-3 -right-2 bg-red-700 rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItem}
                </span>
                <BsCart />
              </Link>
            )}
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-center pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg bg-red-50 has-[:focus]:bg-transparent has-[:focus]:border-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[24rem] px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
              </div>
            </form>
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    onClick={() => setState(!state)}
                    to={item.path}
                    className="block text-gray-700 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {token ? (
              <>
                <Link
                  to={"/cart"}
                  className="lg:block hidden relative text-2xl"
                >
                  <span className="absolute text-center text-[10px] text-white -top-3 -right-2 bg-red-700 rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItem}
                  </span>
                  <BsCart />
                </Link>
                <AvatarMenu user={user} />
              </>
            ) : (
              <Link
                to={"/login"}
                onClick={() => setState(!state)}
                className="block text-center lg:w-auto w-full px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
