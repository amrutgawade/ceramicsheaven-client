import React from 'react'
import './About.css'
import team1 from '../../assets/frontend/assets/img/team/team-1.jpg'
import team2 from '../../assets/frontend/assets/img/team/team-2.jpg'
import team3 from '../../assets/frontend/assets/img/team/team-3.jpg'
import team4 from '../../assets/frontend/assets/img/team/team-4.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs mt-0">
        <div className="container">
          <div className="text-center">
            <h2>About Us</h2>
          </div>
        </div>
      </section>

      <section id="about" className="about bg-light py-5">
        <div className="container">
          <div className="row content">
            <div className="col-lg-6">
              <h2>Eum ipsam laborum deleniti velitena</h2>
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit assum
                perenda sruen jonee trave
              </h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-check-double" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequa
                </li>
                <li>
                  <i className="fa-solid fa-check-double" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="fa-solid fa-check-double" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in
                </li>
              </ul>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg py-5">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Our Hardowrking Team</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={team1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat</p>
                  <div className="social">
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-twitter" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-facebook" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-instagram" />
                      </div>
                    </Link>
                    <Link to="">
                      {" "}
                      <div className='i'>
                        <i className="fab fa-linkedin" />{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={team2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Aut maiores voluptates amet et quis</p>
                  <div className="social">
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-twitter" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-facebook" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-instagram" />
                      </div>
                    </Link>
                    <Link to="">
                      {" "}
                      <div className='i'>
                        <i className="fab fa-linkedin" />{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={team3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Quisquam facilis cum velit laborum corrupti</p>
                  <div className="social">
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-twitter" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-facebook" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-instagram" />
                      </div>
                    </Link>
                    <Link to="">
                      {" "}
                      <div className='i'>
                        <i className="fab fa-linkedin" />{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={team4}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Dolorum tempora officiis odit laborum officiis</p>
                  <div className="social">
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-twitter" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-facebook" />
                      </div>
                    </Link>
                    <Link to="">
                      <div className='i'>
                        <i className="fab fa-instagram" />
                      </div>
                    </Link>
                    <Link to="">
                      {" "}
                      <div className='i'>
                        <i className="fab fa-linkedin" />{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About