import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar";
import lopenze_logo from "../../../assets/lopenze_logo.png";
import HamburgerMenu from "../hamburgerMenu";
import React, { useState } from "react";

interface NavigationBarProps {
  hamburgerShow: boolean;
  role: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ hamburgerShow, role }) => {
  const validRole = role === "admin" || role === "artist" ? role : "user";
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20 bg-white shadow-md flex items-center px-10`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-6">
        <img src={lopenze_logo} alt="Lopenze Logo" className="w-12 h-12" />
        {hamburgerShow && (
          <HamburgerMenu isOpen={menuOpen} onClick={toggleMenu} role={validRole} />
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 space-x-10 text-sm ml-6">
        {["/", "/exhibitionsPage", "/featuredArtistPage", "/allArtPage", "/contactUs"].map(
          (path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md flex items-center space-x-2 ${
                  isActive ? "text-[#C62A35] font-bold" : "text-black"
                } hover:text-[#C62A35] transition-all duration-300 hover:scale-110`
              }
            >
              <span className="relative -m-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#C62A35] after:w-0 hover:after:w-full after:transition-all after:duration-300">
                {["HOME", "EXHIBITIONS", "LOPENZE ARTISTS", "ALL ARTS", "CONTACT US"][index]}
              </span>
            </NavLink>
          )
        )}
      </div>

      {/* Search Bar */}
      <div className="ml-auto">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
