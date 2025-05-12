import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} MovieHub Explorer. Built with 💙 by Shehan</p>
    </footer>
  );
}

export default Footer;
