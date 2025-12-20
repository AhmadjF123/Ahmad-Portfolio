import React from 'react';

function Footer() {
    const date = new Date()
    
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center text-gray-400">
      <p>© {date.getFullYear()} Ahmad J Farroukh. Built with React & Tailwind CSS</p>
    </footer>
  );
}

export default Footer;