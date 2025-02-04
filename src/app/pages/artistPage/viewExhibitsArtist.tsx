// import { useLocation } from "react-router-dom"; // Import useLocation for accessing state
// import { ARTIST_PROFILE, ArtsData } from "../../config/config";
// import ArtCard from "../../components/Cards/ArtCard";
// import { FiEye } from "react-icons/fi";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const ViewExhibit = () => {
//   const location = useLocation(); // Get location object
//   const exhibitData = location.state?.exhibitData; // Access exhibit data from state

//   // Parse exhibit data back to object
//   const exhibit = exhibitData ? JSON.parse(exhibitData) : null;

//   if (!exhibit) {
//     return <div>Exhibit not found or invalid ID.</div>;
//   }

//   const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
//     artist.ARTIST_DATA.ArtWork.map((art) => ({
//       ...art,
//       artist: artist.Name, // Add artist name to each artwork
//     }))
//   );
//   return (
//     <div className="min-h-screen bg-white py-12 px-6 sm:px-8">
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         {/* Exhibition Content */}
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Side - Image */}
//           <div className="md:w-1/2">
//             <img
//               src={exhibit.image.src}
//               alt={exhibit.image.alt}
//               className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
//             />
//           </div>

//           {/* Right Side - Details */}
//           <div className="md:w-1/2 space-y-6">
//             {/* Title */}
//             <h1 className="text-5xl font-extrabold text-black leading-snug hover:text-red-600 transition-colors duration-300">
//               {exhibit.title}
//             </h1>

//             {/* Date and Location */}
//             <div className="flex flex-col items-end text-sm space-y-2">
//               <div className="flex items-center text-gray-500">
//                 <FaCalendarAlt className="w-4 h-4 mr-2 text-red-500"/>
//                 <span>{exhibit.date}</span>
//               </div>
//               <div className="flex items-center text-gray-500">
//                 <FaMapMarkerAlt className="w-4 h-4 mr-2 text-red-500"/>
//                 <span>{exhibit.location}</span>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold text-red-600 border-b border-red-200 pb-2">
//                 Description:
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-justify">
//                 {exhibit.description}
//               </p>
//             </div>

//             {/* Views */}
//             <div className="flex items-center space-x-2">
//               <button
//                 className="flex items-center h-9 justify-center bg-gray-900 text-white px-2 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
//                 // onClick={() => alert(`Views for ${art.title}: ${art.views}`)}
//               >
//                 <FiEye className="text-2 w-4 h-4 mr-2" />
//                 <span>{exhibit.views} </span>
//               </button>
//             </div>

//             {/* Back Button */}
//             <div>
//               <button
//                 onClick={() => window.history.back()}
//                 className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
//               >
//                 Back to Exhibitions
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="bg-white py-16 px-5">
//         <h1 className="text-7xl font-extrabold text-center mb-12 relative">
//           <span
//             className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#C62A35]"
//             style={{ backgroundColor: "#FAF9F6" }}
//           >
//             ARTS
//           </span>
//           <div className="relative mt-4 flex justify-center items-center">
//             <div
//               className="w-24 h-1 bg-gradient-to-r from-black to-[#C62A35] rounded"
//               style={{ backgroundColor: "#FAF9F6" }}
//             ></div>
//           </div>
//         </h1>

//         {/* Display artworks dynamically */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {allArtworks.map((art, index) => (
//             <ArtCard key={index} art={art} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ViewExhibit;


import { useLocation } from "react-router-dom";
import { ARTIST_PROFILE } from "../../config/config";
import ArtCard from "../../components/Cards/ArtCard";
import { FiEye } from "react-icons/fi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const ViewExhibitArtist = () => {
    const location = useLocation();
    const exhibitData = location.state?.exhibitData;
    const exhibit = exhibitData ? JSON.parse(exhibitData) : null;

    if (!exhibit) {
        return <div className="text-center text-lg text-red-600">Exhibit not found or invalid ID.</div>;
    }

    const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
        artist.ARTIST_DATA.ArtWork.map((art) => ({
            ...art,
            artist: artist.Name,
        }))
    );

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Exhibition Content */}
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Left Side - Floating Image */}
                    <motion.div
                        className="md:w-1/2 relative"
                        animate={{ y: [0, -10, 0] }} // Floating effect
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.img
                            src={exhibit.image.src}
                            alt={exhibit.image.alt}
                            className="w-full h-auto rounded-xl shadow-2xl"
                            whileHover={{ scale: 1.05 }} // Smooth hover effect
                        />
                    </motion.div>

                    {/* Right Side - Details */}
                    <div className="md:w-1/2 space-y-6">

                        {/* Title */}
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-snug hover:text-red-600 transition-colors duration-300">
                            {exhibit.title}
                        </h1>

                        {/* Date and Location */}
                        <div className="flex flex-col items-start text-sm space-y-2">
                            <div className="flex items-center text-gray-500">
                                <FaCalendarAlt className="w-5 h-5 mr-2 text-red-500" />
                                <span>{exhibit.date}</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-500" />
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

                        {/* Views Button */}
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <button
                                className="flex items-center h-9 justify-center bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
                            >
                                <FiEye className="w-5 h-5 mr-2" />
                                <span>{exhibit.views}</span>
                            </button>
                        </motion.div>

                        {/* Back Button */}
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <button
                                onClick={() => window.history.back()}
                                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
                            >
                                Back to Exhibitions
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Artworks Section */}
            <section className="bg-white py-16 px-5 shadow-xl rounded-lg">
                <h1 className="text-7xl font-extrabold text-center mb-12 relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#C62A35]">
                        ARTS
                    </span>
                    <div className="relative mt-4 flex justify-center items-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-black to-[#C62A35] rounded"></div>
                    </div>
                </h1>

                {/* Display artworks dynamically */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {allArtworks.map((art, index) => (
                        <ArtCard key={index} art={art} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ViewExhibitArtist;
