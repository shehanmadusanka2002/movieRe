import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md h-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400">🎬 NightFlix</Link>
        <ul className="flex space-x-6">
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
