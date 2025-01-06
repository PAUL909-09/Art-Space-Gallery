import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex items-center relative">
      {/* Hamburger Icon */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        <GiHamburgerMenu size={30} />
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Services</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
