import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Footer Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-3/4 mb-8 md:mb-0">
          <div>
            <h4 className="font-bold">Abstract</h4>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Community</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li className="mt-4">
                <strong>Contact Us</strong><br/>
                <a href="mailto:info@abstract.com" className="text-white">info@abstract.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex h-[12.8rem] flex-col items-start justify-end w-full md:w-1/4">
          <div className="flex items-center mb-2">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          </div>
          <div className="text-left text-sm font-semibold">
            &copy; Copyright 2022<br />
            Abstract Studio Design, Inc.<br />
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
