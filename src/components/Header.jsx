import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="text-xl font-bold">
            My Project
          </div>

          {/* Links for Desktop */}
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden bg-gray-700 overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">About</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
