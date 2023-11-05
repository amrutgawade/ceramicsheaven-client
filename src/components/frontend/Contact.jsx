import React from 'react'
import './Contact.css'

function Contact() {
  const contactSubmitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs mt-0">
        <div className="container">
          <div className="text-center">
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>


      <section id="contact" className="contact bg-light py-5">
        <div className="container">
          <div>
            <iframe
              title='contact'
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.5596906862434!2d73.34382667489959!3d16.996195183825844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0dc37e1305c5%3A0xe06bd4e11bd60c4a!2sMalushte%20Plumbing%20and%20ceramics!5e0!3m2!1sen!2sin!4v1698349525436!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />

          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <div className='i'>
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <h4>Location:</h4>
                  <p>E99, MIDC, beside Dmart, Ratnagiri, Maharashtra 415612</p>
                </div>
                <div className="email">
                  <div className='i'>
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <h4>Email:</h4>
                  <p>info@ceramicsheaven.com</p>
                </div>
                <div className="phone">
                  <div className='i'>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <h4>Call:</h4>
                  <p>+91 7038075444</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                className="php-email-form"
                onSubmit={contactSubmitHandler}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>

                <div className="text-center mt-3">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact