import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <h1 className="mt-4">Profile</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Profile</li>
      </ol>
      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-12 p-0">

            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-body p-5">

                <form>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <div className="form-floating mb-3 mb-md-0">
                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                        <label htmlFor="inputFirstName">First name</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                        <label htmlFor="inputLastName">Last name</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating mb-3 mb-md-0">
                        <input className="form-control" id="inputDOB" type="date" placeholder="dd-mm-yyyy" />
                        <label htmlFor="inputDOB">Date Of Birth</label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                  <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                        <label htmlFor="inputEmail">Email address</label>
                      </div>
                    </div>
                    <div className="col md-6">
                      <div className="form-floating">
                        <input className="form-control mb-3 mb-md-0" id="inputMobile" type="text" placeholder="+91 987-654-3210" />
                        <label htmlFor="inputMobile">Mobile</label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                        <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 mb-0">
                    <div className="d-grid"><Link className="btn btn-primary btn-block" to="/admin/profile">Update Profile</Link></div>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;
