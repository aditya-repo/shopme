import React from 'react';
import Logo from '../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white sticky top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Flipkart Logo"
            className="h-10"
          />
          <span className="text-lg font-bold">Flipkart</span>
        </div>

        <div className="hidden lg:flex items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="flex-grow px-4 py-2 text-gray-700  focus:outline-none"
          />
          <button className="bg-yellow-400 text-black px-4 py-2  hover:bg-yellow-500">
            Search
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-yellow-400 text-black px-4 py-2 hover:bg-yellow-500">
            Login
          </button>
        <div className='cursor-pointer flex'>
        <div className="relative">
        <span className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping} className='text-2xl' /></span>
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-2 py-0.5">
          3
        </span>
      </div>
        <div className='font-bold pl-2'>Cart</div>

        </div>
          <span className="cursor-pointer">More</span>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18M9 21H4a2 2 0 01-2-2V7m2-4h16a2 2 0 012 2v12a2 2 0 01-2 2h-5m-4 4l-3-3m0 0l3-3m-3 3h12"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="block lg:hidden bg-white py-2 px-4">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
