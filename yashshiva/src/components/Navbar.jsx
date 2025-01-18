import React, { useState, useEffect } from 'react';
import { LINKS } from '../constants';
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-gradient-to-br md:rounded-full backdrop-blur-lg neon-border'>
        <div className='text-white font-semibold text-3xl ml-7 uppercase'>
          <a href="/">Yash Shiva</a>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-8 my-5 mx-2'>
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className='text-white hover:text-stone-400 transition duration-300 relative group'
            >
              {link.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute right-0 bottom-[-4px] w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className='w-6 h-6' />
            ) : (
              <RiMenu3Fill className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto'>
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className='text-white hover:text-stone-400 transition duration-300'
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
