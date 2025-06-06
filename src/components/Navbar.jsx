// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-blue-600">Rutuja Das</h1>
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-blue-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white px-4 py-2 space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-2 border-b hover:text-blue-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
