import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Here you could also clear auth state if implemented
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold rounded-md px-3 py-2 hover:bg-gray-700 transition-colors">
          Art Gallery
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors">
            Home
          </Link>
          <Link to="/artworks/new" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ml-4 transition-colors">
            Add New Artwork
          </Link>
          {/* Signout icon button */}
          <button
            onClick={handleSignout}
            title="Sign out"
            className="ml-6 p-2 rounded-full hover:bg-red-600 transition-colors focus:outline-none"
            style={{ background: 'none', border: 'none' }}
          >
            {/* SVG logout icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-400 hover:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m9 0l-3-3m3 3l-3 3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;