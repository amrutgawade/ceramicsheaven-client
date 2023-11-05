import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function HomeLayout() {
    return (
        <>
            <div className='bg-light'>
                <Navbar />
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <Outlet />
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer mt-5">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLayout;