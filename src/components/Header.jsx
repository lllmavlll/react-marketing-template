import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const navs = [
  {
    name: 'home',
    to: '/',
    label: 'Home',
  },
  {
    name: 'about',
    to: '/about',
    label: 'About',
  },
  {
    name: 'contact',
    to: '/contact',
    label: 'Contact',
  },
]

const catButtons = [
  {
    name: 'requestADemo',
    to: '#',
    label: 'Request a demo',
  },
  {
    name: 'signup',
    to: '/signup',
    label: 'SignUp',
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <header className=" relative bg-white-500 px-4 lg:px-8 text-black border-b">
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold py-3 lg:py-0">
            <Link to="/">Maverick</Link>
          </div>

          {/* Burger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center px text-black border-white hover:text-gray-300 hover:border-gray-300"
          >{isMenuOpen ?
            <XMarkIcon className='h-6 w-6 text-black' /> :

            <Bars3Icon className='h-6 w-6 text-black' />
            }
          </button>

          {/* Navigation Menu */}
          <nav className='hidden lg:flex h-full '>
            {navs && navs?.map(nav => (
              <Link key={nav?.name} to={nav?.to} className=" h-auto p-4 text-black hover:text-underline hover:bg-gray-200 duration-300 text-sm font-medium">
                {nav?.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className='hidden lg:flex gap-4 '>
            {catButtons && catButtons?.map(button => (
              <Link key={button?.name} to={button?.to}>
                <button >
                  {button?.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* nav menu in small screen */}
      {
        isMenuOpen &&
        // <div className=' inset-x-0 bg-gray-300 max-h-screen w-full '>
        <div
          className='lg:hidden fixed top-[52px] inset-0 z-40 transform 
          transition-transform duration-300 ease-in-out 
          w-full  bg-white border-t p-4'

        >
          <div className='flex flex-col'>
            {navs && navs?.map(nav => (
              <Link key={nav?.name} to={nav?.to}
                className='text-black text-sm font-medium'
              >
                {nav?.label}
              </Link>
            ))}
          </div>
        </div>
      }
    </>

  )
}

export default Header