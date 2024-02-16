import React from 'react'
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
              <h2>Malushte Plumbing and Ceramics</h2>
              <h3>
               Your Vision, Our Ceramics
              </h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
              Malushte Plumbing and Ceramics brings you the best,
              never seen before designs and patterns uniquely fabricated
              to present a splash of creativity in your surroundings.
              We specialize in plumbing and ceramic products, offering a wide range 
              of options to meet your needs. Whether you're looking for modern, 
              traditional, or contemporary designs, we have a vast selection to choose from.

              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-check-double" /> A reputed ceramic shop offer high-quality ceramic products with a wide variety of designs, styles, and finishes.
                </li>
                <li>
                  <i className="fa-solid fa-check-double" /> Exceptional customer service.
                </li>
                <li>
                  <i className="fa-solid fa-check-double" /> Should be able to guide customers, answer questions, and provide suggestion based on the customer's needs and preferences.
                </li>
              </ul>
              <p className="fst-italic">
              With us, you're not just purchasing products; you're investing in the transformation of your space.
              We're here to turn your vision into reality.
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
                  <h4>Amrut Gawade</h4>
                  <span>Full Stack Developer</span>
                  <p>Pursuing B. E. Computer In GIT</p>
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
                  <h4>Rohit Kadam</h4>
                  <span>Full Stack Developer</span>
                  <p>Pursuing B. E. Computer In GIT</p>
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
                  <h4>Rutikesh Sawant</h4>
                  <span>Backend Developer</span>
                  <p>Pursuing B. E. Computer In GIT</p>
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
                  <h4>Yash Sagvekar</h4>
                  <span>Frontend Developer</span>
                  <p>Pursuing B. E. Computer In GIT</p>
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