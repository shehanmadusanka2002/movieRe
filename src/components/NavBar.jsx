import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import { Menu, X } from 'lucide-react'; // You can use any icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400">🎬 NightFlix</Link>
        
        {/* Hamburger menu icon (shown on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation links - hidden on mobile unless menu is open */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          <DarkMode />
          <li><Link to="/popular" className="hover:text-cyan-400 text-lg font-bold transition">Popular🔥</Link></li>
          <li><Link to="/top-rated" className="hover:text-cyan-400 font-bold text-lg transition">Top Rated🌟</Link></li>
          <li><Link to="/upcoming" className="hover:text-cyan-400 font-bold text-lg transition">Upcoming🥳</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
