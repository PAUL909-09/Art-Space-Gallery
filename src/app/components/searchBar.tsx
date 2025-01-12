import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-500 rounded-md p-2 w-80">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow outline-none bg-gray-100 font-Montserrat font-medium"
      />
      <FaSearch className="flex items-center text-gray-500" />
    </div>
  );
};

export default SearchBar;

