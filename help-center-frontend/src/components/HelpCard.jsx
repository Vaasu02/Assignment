import React from 'react';

const HelpCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-sm bg-[#F4F6F7]">
      <h3 className="font-semibold mb-2 border-b pb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default HelpCard;
