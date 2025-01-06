import { APP_COLORS } from "../config/config";
import lopenze_logo from "../../assets/lopenze_logo.png";

import { NavLink } from "react-router-dom";
import SearchBar from "../components/searchBar";

const navigationBar = () => {
  return (
    <nav className={`h-20 ${APP_COLORS.primary} flex items-center shadow-sm px-10`}>
      
      <div className="flex items-center space-x-6">
        <img src={lopenze_logo} alt="logo" className="h-12 w-12" />
        
      </div>

      <div className="flex flex-1 space-x-10 text-sm ml-6">
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">HOME</span>
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">EXHIBITIONS</span>
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">ARTISTS</span>
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">PAINTINGS</span>
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">SCULPTURES</span>
        </NavLink>
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive
              ? "bg-[#EBBF17] px-4 py-3 rounded-md flex items-center space-x-2"
              : "text-black  px-4 py-3 flex items-center space-x-2"
          }
        >
          <span className="-m-4">ALL ARTS</span>
        </NavLink>
      </div>

      <div className="ml-auto">
        <SearchBar />
      </div>
    </nav>
  );
};

export default navigationBar;
