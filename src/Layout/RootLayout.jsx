import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import TUIFooter from '../components/TUIFooter'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='bg-white px-6 min-h-screen'>
        <Outlet />
      </main>
      {/* <Footer /> */}
      <TUIFooter/>
    </>
  )
}

export default RootLayout