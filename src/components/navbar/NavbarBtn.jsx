import React from 'react';
import { LuSquareArrowOutDownRight } from "react-icons/lu";
import { FaBattleNet } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";

const NavbarBtn = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return ( 
  <button 
    onClick={scrollToContact}
    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-base sm:text-lg md:text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-red hover:border-red hover:scale-105 md:hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow whitespace-nowrap flex-shrink-0"
  >
    <span className="hidden sm:inline">Hire Me</span>
    <span className="sm:hidden">Hire</span>
    <FaGripfire className="text-sm sm:text-base" />
  </button>
  );
};

export default NavbarBtn;