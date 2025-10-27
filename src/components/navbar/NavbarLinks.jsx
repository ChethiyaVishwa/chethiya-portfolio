import React from 'react';

const NavbarLinks = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="hidden md:flex gap-6 justify-center">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white hover:text-red transition-colors duration-200 font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default NavbarLinks;