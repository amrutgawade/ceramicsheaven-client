import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="py-4 bg-dark">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-center small">
                        <div className="text-muted">
                            <span className="text-light me-1">
                                Copyright © Ceramics Heaven 2023. Designed and Developed by
                            </span>
                            <Link to="http://freakdevelopers.com" className='text-warning' target="_Blank">
                                FreakDevs
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer