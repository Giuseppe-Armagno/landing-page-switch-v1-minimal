
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 shadow-sm fixed top-0 left-0 z-10">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Solutions
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Resources
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contacts
            </Link>
          </nav>
          
          <button className="px-4 py-2 rounded-md bg-bookingRed text-white text-sm font-medium hover:bg-opacity-90 transition-colors">
            Book a Call
          </button>
          
          <div className="text-xs font-medium text-gray-800">
            EN | IT
          </div>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
                About Us
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
                Products
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
                Solutions
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
                Resources
              </Link>
              <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
                Contacts
              </Link>
              <button className="mt-2 w-full px-4 py-2 rounded-md bg-bookingRed text-white text-sm font-medium hover:bg-opacity-90 transition-colors">
                Book a Call
              </button>
              <div className="text-xs font-medium text-gray-800 pt-2">
                EN | IT
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// SWITCH logo with dots
const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="font-bold text-xl tracking-tight text-black">
        SWITCH
      </div>
      <div className="flex space-x-1 ml-1">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
