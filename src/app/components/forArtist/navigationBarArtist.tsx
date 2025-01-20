import { APP_COLORS } from "../../config/config";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar";
import lopenze_logo from "../../../assets/lopenze_logo.png";
import React, { useState } from "react";
import HamburgerMenuArtist from "./hamburgerMenuArtist";

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
      className={`h-20 ${APP_COLORS.primary} flex items-center shadow-md px-10 relative z-20 bg-white`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-6">
        <img src={lopenze_logo} alt="Lopenze Logo" className="w-12 h-12" />
        {hamburgerShow && <HamburgerMenuArtist isOpen={menuOpen} onClick={toggleMenu} role={validRole} />}
      </div>

      <div className="flex flex-1 space-x-10 text-sm ml-6">
        <NavLink
          to="/artist"
          className={({ isActive }) =>
            isActive
              ? "text-[#C62A35] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">HOME</span>
        </NavLink>
        <NavLink
          to="/exhibitPageArtist"
          className={({ isActive }) =>
            isActive
              ? "text-[#C62A35] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">EXHIBITIONS</span>
        </NavLink>
        <NavLink
          to="/featuredArtistArtist"
          className={({ isActive }) =>
            isActive
              ? "text-[#C62A35] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">LOPENZE ARTISTS</span>
        </NavLink>
        <NavLink
          to="/allArtArtist"
          className={({ isActive }) =>
            isActive
              ? "text-[#C62A35] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">ALL ARTS</span>
        </NavLink>

        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-[#C62A35] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">CONTACT US</span>
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="ml-auto">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
