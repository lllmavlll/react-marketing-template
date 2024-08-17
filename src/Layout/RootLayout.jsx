import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='bg-white px-6'>
        {/* <Outlet /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout