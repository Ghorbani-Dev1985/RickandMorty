import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <section className='container'>
        <div className='border border-gray-600 rounded-xl min-h-screen'>
    <Outlet />
        </div>
    </section>
    </>
  )
}

export default Layout