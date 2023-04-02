import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[rgba(30,28,132,1)] via-[rgba(93,53,177,1)] to-[rgba(104,58,183,1)] text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Brand</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
