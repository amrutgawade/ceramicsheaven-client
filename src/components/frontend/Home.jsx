import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import client1 from '../../assets/frontend/assets/img/clients/client-1.png'
import client2 from '../../assets/frontend/assets/img/clients/client-2.png'
import client3 from '../../assets/frontend/assets/img/clients/client-3.png'
import client4 from '../../assets/frontend/assets/img/clients/client-4.png'
import client5 from '../../assets/frontend/assets/img/clients/client-5.png'
import client6 from '../../assets/frontend/assets/img/clients/client-6.png'
import slide1 from '../../assets/frontend/assets/img/slide/slide-1.jpg'
import slide2 from '../../assets/frontend/assets/img/slide/slide-2.jpg'
import slide3 from '../../assets/frontend/assets/img/slide/slide-3.jpg'

function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="Slide-1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="Slide-1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Slide-3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <section id="clients" className="clients section-bg bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client1}
                className="img-fluid"
                alt="Brands"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client2}
                className="img-fluid"
                alt="Brands"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client3}
                className="img-fluid"
                alt="Brands"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client4}
                className="img-fluid"
                alt="Brands"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client5}
                className="img-fluid"
                alt="Brands"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client6}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

        <hr className='p-0 m-0' />

      <section className="pb-5 pt-1 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* Product price*/}
                    ₹40.00 - ₹80.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to="#">
                      View options
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Special Item</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">
                      ₹20.00
                    </span>
                    ₹18.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to="#">
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge*/}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Sale Item</h5>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">
                      ₹50.00
                    </span>
                    ₹25.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to="#">
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Popular Item</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    ₹40.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to="#">
                      Add to cart
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

export default Home