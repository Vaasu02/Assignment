import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#000000] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Abstract logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">Abstract | <span className='font-semibold'>Help Center</span></h1>
        </div>
        <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded hover:bg-gray-200 transition-colors">
          Submit a request
        </button>
      </div>
    </header>
  );
};

export default Header;