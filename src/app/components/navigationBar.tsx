import { APP_COLORS, APP_ROUTES } from "../config/config";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/searchBar";
import lopenze_logo from "../../assets/lopenze_logo.png";
import HamburgerMenu from "./hamburgerMenu";
import React, { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggles between true and false
  };

  return (
    <nav
      className={`h-20 ${APP_COLORS.primary} flex items-center shadow-md px-10 relative z-20 bg-white`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-6">
        <img src={lopenze_logo} alt="logo" className="h-12 w-12" />
        <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 space-x-10 text-sm ml-6">
        {APP_ROUTES.MAIN.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            aria-label={route.path}
            className={({ isActive }) =>
              isActive
                ? `text-${APP_COLORS.secondary.replace("bg-", "")} font-semibold`
                : "text-black font-semibold"
            }
            style={{
              textDecoration: "none",
            }}
          >
            {route.path === "/"
              ? "HOME"
              : route.path === "/exhibitionsPage"
              ? "EXHIBITIONS"
              : route.path === "/featuredArtistPage"
              ? "FEATURED ARTISTS"
              : route.path === "/allArtPage"
              ? "ALL ARTS"
              : route.path.replace("/", "").toUpperCase()}
          </NavLink>
        ))}
      </div>

      {/* Search Bar */}
      <div className="ml-auto">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavigationBar;
