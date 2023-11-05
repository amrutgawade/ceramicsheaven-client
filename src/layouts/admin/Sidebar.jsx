import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {


  return (
    <nav
      className="sb-sidenav accordion sb-sidenav-dark"
      id="sidenavAccordion"
    >
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <Link className="nav-link" to="/admin/dashboard">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt" />
            </div>
            Dashboard
          </Link>
          <Link className="nav-link" to="/admin/profile">
            <div className="sb-nav-link-icon">
              <i className="fas fa-user" />
            </div>
            Profile
          </Link>
          <Link
            className="nav-link collapsed"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-bag-shopping" />
            </div>
            Inventory
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down" />
            </div>
          </Link>
          <div
            className="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="#">
                Add Products
              </Link>
              <Link className="nav-link" to="#">
                Manage Products
              </Link>
            </nav>
          </div>

          {/* <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-user" />
              </div>
              Room Details
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link> */}
          {/* <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="layout-static.html">
                  Add Rooms
                </Link>
                <Link className="nav-link" to="layout-sidenav-light.html">
                  Manage Rooms
                </Link>
              </nav>
            </div> */}

          <Link className="nav-link" to="#">
            <div className="sb-nav-link-icon">
              <i className="fas fa-cart-shopping" />
            </div>
            Orders
          </Link>
          <Link className="nav-link" to="#">
            <div className="sb-nav-link-icon">
              <i className="fas fa-users" />
            </div>
            Users
          </Link>

          <Link className="nav-link" to="#">
            <div className="sb-nav-link-icon">
              <i className="fas fa-envelope" />
            </div>
            Complaints
          </Link>

        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Admin
      </div>
    </nav>
  );

}

export default Sidebar;
