import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/frontend/js/script";
import "./Navbar.css";
import Logo from "../../assets/frontend/assets/img/logo.svg";


function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("username")
  );

  const onLogout = () => {
    localStorage.clear();
    setIsLoggedIn(localStorage.getItem("username"));
  };

  useEffect(() => {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      setIsLoggedIn(
        isLoggedIn.split(" ")[0].charAt(0) +
          " " +
          isLoggedIn.split(" ")[1].charAt(0)
      );
    } else if (isLoggedIn == null) {
      const timer = setInterval(() => {
        setIsLoggedIn(localStorage.getItem("username"));
      }, 1000); // Run every second

      return () => {
        clearInterval(timer);
      };
    }
  }, [onLogout]);
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow sticky-top navbar-light bg-light py-3">
        <div className="container position-relative">
          <div className="d-flex">
            <button
              className="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <img className="my-auto" src={Logo} alt="" width="50" height="50" />
            <Link className="navbar-brand me-auto my-auto" to="/">
              Ceramics Heaven
            </Link>
            </div>
            <div className="d-flex">
              
            {isLoggedIn === null ? (
              <div className="position-absolute end-0 translate-middle">
                <Link
                  type="button"
                  className="btn btn-outline-warning"
                  to={"/login"}
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="d-flex position-absolute end-0 translate-middle-y me-4">
                <form className="d-flex">
                  <button
                    className="btn btn-outline-warning position-relative me-3"
                    type="submit"
                  >
                    <i className="fa-solid fa-cart-shopping" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      0
                    </span>
                  </button>
                </form>
                <ul className="navbar-nav ms-2">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      id="navbarDropdown"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="text-uppercase fw-bold fst-normal user">
                        {isLoggedIn}
                      </i>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-end position-absolute"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          Profile
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          to="/"
                          onClick={onLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-warning"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
