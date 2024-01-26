import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden bg-white'>
      <Sidebar />
      <div className='flex flex-col'>

      <Header />
      <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout