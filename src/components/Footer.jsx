import React from 'react'
import { Link } from 'react-router-dom';


const footerLinks = [
  {
    category: "Footer nav 1",
    links: [
      { name: "footer sub nav 11", url: "#" },
      { name: "footer sub nav 12", url: "#" },
      { name: "footer sub nav 13", url: "#" },
      { name: "footer sub nav 14", url: "#" },
    ]
  },
  {
    category: "Footwr nav 2",
    links: [
      { name: "footer sub nav 21", url: "#" },
      { name: "footer sub nav 22", url: "#" },
      { name: "footer sub nav 23", url: "#" },
      { name: "footer sub nav 24", url: "#" },
    ]
  },
  {
    category: "Footer nav 3",
    links: [
      { name: "footer sub nav 31", url: "#" },
      { name: "footer sub nav 32", url: "#" },
      { name: "footer sub nav 33", url: "#" },
      { name: "footer sub nav 34", url: "#" },
    ]
  },
  {
    category: "Footer nav 4",
    links: [
      { name: "footer sub nav 41", url: "#" },
      { name: "footer sub nav 42", url: "#" },
      { name: "footer sub nav 43", url: "#" },
      { name: "footer sub nav 44", url: "#" },
    ]
  },

]

const Footer = () => {
  return (
    <footer className=' '>
      <div className="mt-2 px-4 lg:px-6">
        <div className="w-full h-[1px] bg-gray-200 mx-auto" />
      </div>
      <section className=' max-w-7xl mx-auto px-6 pb-8 pt-12 sm:pt-20 md:px-8 '>
        <div className=' flex flex-col lg:flex-row  gap-10 w-full '>
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[28%] flex flex-col gap-2">
            <Link className='text-xl font-bold' to="/">Logo</Link>
            <p>company provides reliable and secure DevOps solutions, optimizing tech operations for businesses.</p>
            <h2 className='font-semibold'> Social links here</h2>
          </div>
          <div className=" mt-16 grid grid-cols-2 w-full md:grid-cols-4 gap-8 xl:col-span-2 lg:mt-0 md:justify-items-stretch">
            {footerLinks && footerLinks?.map(nav => (
              <div key={nav?.category} className="min-w-[100px]">
                <p className="text-sm font-semibold text-gray-900">
                  {nav.category}
                </p>
                <ul role="list" className="mt-2 flex flex-col gap-1.5">
                  {nav.links.map((item) => (
                    <li key={item?.name} className="">
                      <Link
                        to={item.url}
                        className="w-full  text-sm text-gray-800  duration-500 
                        hover:text-gray-900 "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className=" mt-10 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-12 text-center ">
          <p className="text-xs leading-5 text-gray-800">
            &copy; 2024 Company Name...
          </p>
        </div>
      </section>
    </footer >
  )
}

export default Footer