"use client"
import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
        <img src="../img/tech.png" width={40} />
        </a>

        {/* Centered Links on Desktop */}
        <div className="show md:flex space-x-6 mx-auto">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`} // Links to section with corresponding id
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300"
        >
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
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute w-full left-0 top-full">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
              key={item}
                href={`#${item.toLowerCase()}`} // Links to section with corresponding id
                className="block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )} */}
      </nav>
    </header>
  );
};

export default NavBar;
