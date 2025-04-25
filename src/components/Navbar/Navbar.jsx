// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Import React Icons
import auth from '../../Firebase/Firebase.init';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);  // Clear the user state
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleUserIconClick = () => {
    navigate('/listedBook');  // Redirect to the ListedBook page when user icon is clicked
  };

  return (
    <nav className="bg-gray-100 shadow py-4 px-6 md:px-44">
      <div className="flex justify-between items-center">
        {/* Left - Site name */}
        <Link to="/" className="text-xl font-bold text-indigo-900">
          BookNest
        </Link>

        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl focus:outline-none">
            {open ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop - Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/books" className="hover:text-blue-500">Books</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Desktop - User info / Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {/* User Icon - On Click, redirect to ListedBook */}
              <FaUser 
                className="text-xl text-gray-700 cursor-pointer" 
                onClick={handleUserIconClick} // Redirect to ListedBook page
              />
              <span className="ml-2 text-md text-gray-700">Hello, {user.displayName || user.email}</span>
              <button 
                onClick={handleLogout} 
                className="px-4 py-1 border border-indigo-900 text-black rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-4 text-indigo-900 rounded ">
                <FaSignInAlt className="inline-block mr-2" /> Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile nav items */}
      {open && (
        <div className="mt-4 flex flex-col space-y-3 md:hidden">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/books" className="hover:text-blue-500">Books</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          {user ? (
            <>
              <span className="text-sm text-gray-700">Hello, {user.displayName || user.email}</span>
              <button 
                onClick={handleLogout} 
                className="px-4 py-1 border border-indigo-900 text-black rounded "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 bg-blue-500 text-white rounded">
                <FaSignInAlt className="inline-block mr-2" /> Login
              </Link>
              <Link to="/signup" className="px-4 py-1 border border-blue-500 text-blue-500 rounded">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
