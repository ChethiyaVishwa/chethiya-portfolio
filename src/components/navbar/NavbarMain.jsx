import React, { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';    
import { HiMenu, HiX } from 'react-icons/hi';

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        const y = parseInt(scrollY || '0', 10) * -1;
        window.scrollTo(0, y);
      }
    }

    // Cleanup function
    return () => {
      if (!isMenuOpen) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = (e, href) => {
    e.preventDefault();
    // Close menu first
    setIsMenuOpen(false);
    
    // Wait for menu to close, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
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
    <>
      <nav className={`w-full fixed top-0 left-0 right-0 z-40 py-3 px-6 sm:px-8 md:px-12 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
              
              {/* Mobile Menu Button (Cyber HUD) */}
            <button 
              onClick={toggleMenu}
              className="md:hidden group relative h-10 px-4 flex items-center gap-3 rounded-lg bg-white/5 hover:bg-cyan/10 transition-all duration-300 border border-white/10 hover:border-cyan/30 backdrop-blur-md"
              aria-label="Toggle menu"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 group-hover:text-cyan transition-colors uppercase mt-[1px]">
                {isMenuOpen ? 'SYS.CLOSE' : 'SYS.MENU'}
              </span>
              <div className="relative w-4 h-[10px]">
                <div className={`absolute left-0 w-full h-[1.5px] bg-white/70 group-hover:bg-cyan transition-all duration-300 ${isMenuOpen ? 'top-[4px] rotate-45' : 'top-0'}`}></div>
                <div className={`absolute right-0 h-[1.5px] bg-white/70 group-hover:bg-cyan transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0 top-[4px]' : 'w-2/3 top-[4px]'}`}></div>
                <div className={`absolute left-0 w-full h-[1.5px] bg-white/70 group-hover:bg-cyan transition-all duration-300 ${isMenuOpen ? 'top-[4px] -rotate-45' : 'top-[8px]'}`}></div>
              </div>
            </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Minimalist HUD Card */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={toggleMenu}
          ></div>
          
          {/* Menu Card */}
          <div 
            className="relative w-full max-w-[320px] bg-[#02050f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col p-6 animate-[slideUpFade_0.3s_ease-out]"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <span className="text-[10px] text-cyan/60 font-mono tracking-[0.3em] uppercase">SYSTEM.NAV</span>
              <button 
                onClick={toggleMenu}
                className="text-white/50 hover:text-red transition-colors duration-300"
                aria-label="Close menu"
              >
                <div className="relative w-4 h-4">
                  <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full rotate-45 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full -rotate-45 -translate-y-1/2"></div>
                </div>
              </button>
            </div>
            
            {/* Small Text Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleMenuLinkClick(e, item.href)}
                  className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-cyan/40 group-hover:text-cyan transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 text-cyan translate-x-2 group-hover:translate-x-0 transition-all">
                    //
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-4">
              <div className="w-full" onClick={toggleMenu}>
                <NavbarBtn stretch />
              </div>
              <div className="flex justify-around items-center">
                {['GH', 'IN', 'TW'].map((social, i) => (
                  <span key={i} className="text-[10px] text-white/30 font-mono hover:text-cyan cursor-pointer transition-colors duration-300 uppercase tracking-widest">
                    [{social}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMain;
