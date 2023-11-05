import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
      <nav className="sb-topnav navbar navbar-expand shadow bg-body rounded sticky-top bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Ceramics Heaven</span>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-warning" to={"/"}>
                Home
              </Link>
              {/* <div className='text-decoration-underline'>{""}</div> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to={"/products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <form className="d-flex">
              <button className="btn btn-outline-warning me-3" type="submit">
                <i className="fa-solid fa-cart-shopping me-1" />
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>

            {isLoggedIn === null ? (
              <Link className="btn btn-outline-warning" to={"/login"}>
                Login
              </Link>
            ) : (
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
                    className="dropdown-menu dropdown-menu-end"
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
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
