import React from 'react';
import { LuSquareArrowOutDownRight } from "react-icons/lu";
import { FaBattleNet } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";

const NavbarBtn = ({ onCloseMenu }) => {
  const scrollToContact = () => {
    // Close mobile menu if callback is provided
    if (onCloseMenu) {
      onCloseMenu();
    }
    
    // Wait a bit for menu to close, then scroll
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, onCloseMenu ? 100 : 0);
  };

  return ( 
  <button 
    onClick={scrollToContact}
    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-base sm:text-lg md:text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-red hover:border-red hover:scale-105 md:hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow whitespace-nowrap flex-shrink-0"
  >
    <span className="hidden sm:inline">Hire Me</span>
    <span className="sm:hidden">Hire Me</span>
    <FaGripfire className="text-sm sm:text-base" />
  </button>
  );
};

export default NavbarBtn;