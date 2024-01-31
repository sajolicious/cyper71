import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { IoMoonOutline, IoSunnyOutline, IoMenuOutline } from 'react-icons/io5'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="bg-gray-600 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <AiOutlinePaperClip className="h-6 w-6 text-primary" />
            <span className="ml-2 text-white font-bold">Cypheria71</span>
          </a>

          {/* Primary menu */}
          <div className="hidden lg:flex space-x-8 text-white">
            <Link to="/" className="hover:text-[#FBD705] transition duration-300">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-[#FBD705] transition duration-300">
              About
            </Link>
            <Link to="/our-services" className="hover:text-[#FBD705] transition duration-300">
              Services
            </Link>
            <Link to="/products" className="hover:text-[#FBD705] transition duration-300">
              Products
            </Link>
            <Link to="/contact-us" className="hover:text-[#FBD705] transition duration-300">
              Contact
            </Link>
          </div>

          {/* Secondary menu and mobile toggle */}
          <div className="flex items-center lg:hidden">
            <div className="flex items-center space-x-4">
              <IoMoonOutline className="h-6 w-6 text-white" />
              <IoSunnyOutline className="h-6 w-6 text-white" />
            </div>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <IoMenuOutline className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {toggleMenu && (
        <div className="lg:hidden bg-gray-100 overflow-hidden flex flex-col origin-top duration-700">
          <div className="px-4 pt-2 pb-8">
            <div className="flex flex-col gap-4 font-bold tracking-wider">
              <Link to="/" className="hover:text-[#FBD705] transition duration-300">
                Home
              </Link>
              <Link to="/about-us" className="hover:text-[#FBD705] transition duration-300">
                About
              </Link>
              <Link to="/our-services" className="hover:text-[#FBD705] transition duration-300">
                Services
              </Link>
              <Link to="/products" className="hover:text-[#FBD705] transition duration-300">
                Products
              </Link>
              <Link to="/contact-us" className="hover:text-[#FBD705] transition duration-300">
                Contact
              </Link>
              <Link to="/project-portfolio" className="hover:text-[#FBD705] transition duration-300">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
