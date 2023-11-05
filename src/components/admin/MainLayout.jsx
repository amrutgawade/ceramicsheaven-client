import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='container-fluid px-4'>
        <Outlet />
    </div>
  )
}

export default MainLayout