import { useState } from 'react';
import SearchBar from './SearchBar';

const Header = ({pageNum, setPageNum, resetPageNum}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-600 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="text-xl font-bold cursor-pointer" onClick={resetPageNum}>
            My Project
          </div>

          <div>
            <SearchBar
              pageNum={pageNum}
              setPageNum={setPageNum}
            />
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
