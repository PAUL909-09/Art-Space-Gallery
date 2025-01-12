// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const HamburgerMenu = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <div className="flex items-center relative">
//       {/* Hamburger Icon */}
//       <div onClick={toggleDropdown} className="cursor-pointer">
//         <GiHamburgerMenu size={30} />
//       </div>

//       {/* Dropdown Menu */}
//       {isDropdownVisible && (
//         <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
//           <ul className="flex flex-col">
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About</li>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</li>
//             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Services</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

import React, { useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

interface HamburgerMenuProps {
  isOpen: boolean; // Controls whether the dropdown is visible
  onClick: () => void; // Toggles the menu open/close
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      if (isOpen) {
        onClick(); // Close the menu if it's open
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div
        onClick={onClick} // Toggles open/close
        className="cursor-pointer text-black"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        <GiHamburgerMenu size={30} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="dropdown-menu"
          className="absolute top-10 left-0 w-[900px] bg-black text-white shadow-lg rounded-md z-50 font-medium tracking-wide px-2 py-2 mt-5 transition-all duration-300 ease-in-out"
        >
          <ul className="flex flex-col space-y-3 p-4">
            <NavLink
              to= "/"
              className="hover:text-[#C62A35] cursor-pointer"
            >
              Home
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
