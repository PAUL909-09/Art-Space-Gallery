import React, { useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

interface HamburgerMenuProps {
  isOpen: boolean; // Controls whether the dropdown is visible
  onClick: () => void; // Toggles the menu open/close
  role: "admin" | "artist" | "user"; // User role to determine menu options
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick, role }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          className="absolute top-10 left-0 w-[300px] bg-black text-white shadow-lg rounded-md z-50 font-medium tracking-wide px-2 py-2 mt-5 transition-all duration-300 ease-in-out"
        >
          <ul className="flex flex-col space-y-3 p-4">
            {role === "admin" ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/createAccount"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Create Account
                </NavLink>
                <NavLink
                  to="/addExhibit"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Add Exhibit
                </NavLink>
                <NavLink
                  to="/logout"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Logout
                </NavLink>
              </>
            ) : role === "artist" ? (
              <>
                <NavLink
                  to="/profileArtist"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  My Profile
                </NavLink>
                <NavLink
                  to="/logOutArtist"
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Logout
                </NavLink>
              </>
            ) : null}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
