import React from 'react';
import Logo from '../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import LoginDropdown from './LoginDropdown';
import MoreDropdown from './MoreDropDown';
import Sidebar from './sidebar';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white sticky top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sidebar />
          </div>

        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Flipkart Logo"
            className="h-8 md:h-10"
          />
          <span className="text-lg font-bold hidden md:inline">Flipkart</span>
        </div>

        <div className="lg:flex items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="flex-grow px-4 py-2 text-gray-700  focus:outline-none hidden lg:inline"
          />
          <button className="bg-white text-gray-600 px-4 py-2 hidden lg:inline">
          <FontAwesomeIcon icon={faSearch} className='text-lg' />
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <LoginDropdown />
        <div className='cursor-pointer flex'>
        <div className="relative">
        <span className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping} className='text-2xl' /></span>
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-2 py-0.5">
          3
        </span>
      </div>
        <div className='font-bold pl-2 hidden md:block'>Cart</div>

        </div>
          <span className="cursor-pointer"><MoreDropdown /></span>
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
