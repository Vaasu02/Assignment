import React from 'react';
import { ArrowRight } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-[#DADBF0] h-[300px] p-10 text-center">
      <h2 className="text-6xl mt-8 font-semibold mb-6">How can we help?</h2>
      <div className="relative w-1/2 mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="border rounded h-12 w-full py-2 px-4 pr-10"
        />
        <ArrowRight className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
