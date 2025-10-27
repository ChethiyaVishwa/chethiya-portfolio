import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';    
import { HiMenu, HiX } from 'react-icons/hi';

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-20 py-3 px-6 sm:px-8 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full border-[0.5px] border-gradient-to-r from-cyan/30 via-red/50 to-cyan/30 shadow-lg relative overflow-hidden">
          {/* Subtle accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-red/5 rounded-full"></div>
          
          {/* Content positioned above overlay */}
          <div className="relative z-10 flex justify-between items-center w-full">
            <NavbarLogo/>
            <NavbarLinks/>
            <div className="hidden md:block">
              <NavbarBtn/>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red/20 hover:to-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red/20 border border-gray-700/50 hover:border-red/40"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></div>
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-2.5'}`}></div>
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></div>
              </div>
            </button>
          </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={toggleMenu}
          ></div>
          
          {/* Menu Content */}
          <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-red/30 shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red/20 hover:to-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red/20 border border-gray-700/50 hover:border-red/40"
              aria-label="Close menu"
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full rotate-45 translate-y-2.5"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full -rotate-45 translate-y-2.5"></div>
              </div>
            </button>
            
            <div className="pt-20 pb-8 px-6">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-white hover:text-red transition-all duration-300 font-medium text-xl py-3 px-4 rounded-lg hover:bg-gray-800/30 border-l-4 border-transparent hover:border-red"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-6 border-t border-gray-700/50">
                  <NavbarBtn/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
