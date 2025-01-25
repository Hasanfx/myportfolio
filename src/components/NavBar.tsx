"use client"
import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      
        <a href="/">
        <img src="../img/tech.png" width={40} />
        </a>

        
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

      </nav>
    </header>
  );
};

export default NavBar;
