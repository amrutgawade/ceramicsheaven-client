import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar shadow bg-body rounded sticky-top bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Ceramics Heaven</span>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link className='nav-link text-warning' to={"/"}>Home</Link>
                            {/* <div className='text-decoration-underline'>{""}</div> */}
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-warning' to={"/products"}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-warning' to={"/about"}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-warning' to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                    <div className='d-flex'>

                    <form className="d-flex">
                        <button className="btn btn-outline-warning me-3" type="submit">
                            <i className="fa-solid fa-cart-shopping me-1" />
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>

                    <Link className='btn btn-outline-warning' to={"/login"}>Login</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar