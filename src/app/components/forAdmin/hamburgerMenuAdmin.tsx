import React, { useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

interface HamburgerMenuProps {
  isOpen: boolean; // Controls whether the dropdown is visible
  onClick: () => void; // Toggles the menu open/close
  role: "admin" | "artist" | "user"; // User role to determine menu options
}

const HamburgerMenuAdmin: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  role,
}) => {
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

  const handleNavigation = (path: string) => {
    navigate(path);
    onClick(); // Hide the hamburger menu after navigation
  };

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
                <li
                  onClick={() => handleNavigation("/dashboardAdmin")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Dashboard
                </li>
                <li
                  onClick={() => handleNavigation("/createAccountAdmin")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Create Account
                </li>
                <li
                  onClick={() => handleNavigation("/addExhibitAdmin")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Add Exhibit
                </li>
                <li
                  onClick={() => handleNavigation("/logoutAdmin")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Logout
                </li>
              </>
            ) : role === "artist" ? (
              <>
                <li
                  onClick={() => handleNavigation("/profileArtist")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  My Profile
                </li>
                <li
                  onClick={() => handleNavigation("/logoutArtist")}
                  className="hover:text-[#C62A35] cursor-pointer"
                >
                  Logout
                </li>
              </>
            ) : null}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuAdmin;

