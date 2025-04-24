import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow py-4 mx-auto px-44">
      <div className="flex justify-between items-center">
        {/* Left - Site name */}
        <div className="text-xl font-bold">BookNest</div>

        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-xl">
            {open ? 'X' : '☰'}
          </button>
        </div>

        {/* Middle - Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/books" className="hover:text-blue-500">Books</a>
          <a href="#" className="hover:text-blue-500">About</a>
        </div>

        {/* Right - Buttons (desktop) */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-1 bg-blue-500 text-white rounded">Login</button>
          <button className="px-4 py-1 border border-blue-500 rounded text-blue-500">Signup</button>
        </div>
      </div>

      {/* Mobile Nav items (when toggle is open) */}
      {open && (
        <div className="mt-4 flex flex-col items-start space-y-3 md:hidden">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Books</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <button className="px-4 py-1 bg-blue-500 text-white rounded w-full">Login</button>
          <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded w-full">Signup</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
