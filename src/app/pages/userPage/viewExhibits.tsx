import { useLocation } from "react-router-dom"; // Import useLocation for accessing state
import { ArtsData } from "../../config/config";
import ArtCard from "../../components/Cards/ArtCard";
import { FiEye } from "react-icons/fi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ViewExhibit = () => {
  const location = useLocation(); // Get location object
  const exhibitData = location.state?.exhibitData; // Access exhibit data from state

  // Parse exhibit data back to object
  const exhibit = exhibitData ? JSON.parse(exhibitData) : null;

  if (!exhibit) {
    return <div>Exhibit not found or invalid ID.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Exhibition Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src={exhibit.image.src}
              alt={exhibit.image.alt}
              className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          {/* Right Side - Details */}
          <div className="md:w-1/2 space-y-6">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-black leading-snug hover:text-red-600 transition-colors duration-300">
              {exhibit.title}
            </h1>

            {/* Date and Location */}
            <div className="flex flex-col items-end text-sm space-y-2">
              <div className="flex items-center text-gray-500">
                <FaCalendarAlt className="w-4 h-4 mr-2 text-red-500"/>
                <span>{exhibit.date}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-red-500"/>
                <span>{exhibit.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-red-600 border-b border-red-200 pb-2">
                Description:
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {exhibit.description}
              </p>
            </div>

            {/* Views */}
            <div className="flex items-center space-x-2">
              <button
                className="flex items-center h-9 justify-center bg-gray-900 text-white px-2 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
                // onClick={() => alert(`Views for ${art.title}: ${art.views}`)}
              >
                <FiEye className="text-2 w-4 h-4 mr-2" />
                <span>{exhibit.views} </span>
              </button>
            </div>

            {/* Back Button */}
            <div>
              <button
                onClick={() => window.history.back()}
                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Back to Exhibitions
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 px-5">
        <div className="text-center mb-14 my-8 ">
          <h2 className="relative inline-block text-8xl font-bold text-gray-900">
            <span className="relative z-10">EXHIBIT ART PIECE</span>
            <span className="absolute inset-0 mt-7 bg-red-800 h-14 top-1/2 -translate-y-1/2 z-0 w-[400%] left-[-150%]"></span>
          </h2>
        </div>
      </section>

      <section className="bg-white mb-15 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ArtsData.map((art, index) => (
            <ArtCard key={index} art={art} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ViewExhibit;
