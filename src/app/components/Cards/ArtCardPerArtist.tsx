// // import React from "react";
// // import { FiEye } from "react-icons/fi";
// // import { useNavigate } from "react-router-dom";
// // import Button from "../Buttons/button";

// // interface Art {
// //     title: string;
// //     year?: number;
// //     type: string;
// //     dimensions?: string;
// //     views?: number;
// //     image: {
// //         src: string;
// //         alt: string;
// //     };
// //     artist: string; // Add artist property if needed
// // }

// // interface ArtCardPerArtistProps {
// //     art: Art;
// // }

// // const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
// //     const navigate = useNavigate();

// //     const handleViewMore = () => {
// //         navigate("/viewArts", { state: art });
// //         window.scrollTo(0, 0);
// //     };

// //     return (
// //         <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm mx-auto flex flex-col">
// //             {/* Artwork Image */}
// //             <div className="relative group">
// //                 <img
// //                     src={art.image.src}
// //                     alt={art.image.alt}
// //                     className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
// //                 />
// //                 {/* Views Display (Moved to Image Section) */}
// //                 <div className="absolute top-2 right-2 bg-gray-600 text-white text-sm px-4 py-1 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 transition-transform duration-300">
// //                     <FiEye className="w-4 h-4 mr-1" />
// //                     <span>{art.views}</span>
// //                 </div>
// //             </div>

// //             {/* Card Content */}
// //             <div className="p-5 flex-1 flex flex-col">
// //                 <h2 className="text-2xl font-semibold text-gray-800">{art.title}</h2>
// //                 <p className="text-red-600 font-medium mt-1">Artist: {art.artist}</p>
// //                 <p className="text-gray-700 font-medium">Type: {art.type}</p>

// //                 {/* Description (Truncated) */}
// //                 <p className="text-gray-600 text-sm mt-3 line-clamp-3 overflow-hidden">
// //                     <span className="font-semibold text-red-600">Description:</span>{" "}
// //                     {art.description}
// //                 </p>
// //             </div>

// //             {/* Footer Section */}
// //             <div className="p-4 bg-gray-100 flex flex-col items-center space-y-3 rounded-b-2xl">
// //                 {/* View More Button */}
// //                 <Button variant="secondary" onClick={handleViewMore}>
// //                     View More
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ArtCardPerArtist;
// import React from "react";
// import { FiEye } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// interface Art {
//     title: string;
//     year?: number;
//     type: string;
//     dimensions?: string;
//     views?: number;
//     image: {
//         src: string;
//         alt: string;
//     };
//     name?: string; // Add artist property if needed
// }

// interface ArtCardPerArtistProps {
//     art: Art;
// }

// const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
//     const navigate = useNavigate();

//     const handleViewMore = () => {
//         navigate("/viewArts", { state: art });
//         window.scrollTo(0, 0);
//     };

//     return (
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-80 h-[450px] mx-auto flex flex-col">
//             {/* Artwork Image */}
//             <div className="relative group h-64 w-full">
//                 <img
//                     src={art.image.src}
//                     alt={art.image.alt}
//                     className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Views Display (Moved to Image Section) */}
//                 <div className="absolute top-2 right-2 bg-gray-600 text-white text-sm px-4 py-1 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 transition-transform duration-300">
//                     <FiEye className="w-4 h-4 mr-1" />
//                     <span>{art.views}</span>
//                 </div>
//             </div>

//             {/* Card Content */}
//             <div className="p-5 flex-1 flex flex-col">
//                 <h2 className="text-2xl font-semibold text-gray-800">{art.title}</h2>
//                 {/* <p className="text-red-600 font-medium mt-1">Artist: {art.name}</p> */}
//                 <p className="text-gray-700 font-medium">Type: {art.type}</p>

//                 {/* Description (Truncated) */}
//                 {/* <p className="text-gray-600 text-sm mt-3 line-clamp-3 overflow-hidden">
//                     <span className="font-semibold text-red-600">Description:</span>{" "}
//                     {art.description}
//                 </p> */}
//             </div>

//             {/* Footer Section */}
//             <div className="p-4  flex flex-col items-center space-y-3 rounded-b-2xl">
//                 {/* View More Button */}
//                 <Button variant="secondary" onClick={handleViewMore}>
//                     View More
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ArtCardPerArtist;

// import React from "react";
// import { FiEye } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// interface Art {
//   title: string;
//   year?: number;
//   type: string;
//   dimensions?: string;
//   views?: number;
//   image: {
//     src: string;
//     alt: string;
//   };
//   artist: string;
// }

// interface ArtCardPerArtistProps {
//   art: Art;
// }

// const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
//   const navigate = useNavigate();

//   const handleViewMore = () => {
//     navigate("/viewArts", { state: art });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] w-80 sm:w-96 h-[470px] mx-auto flex flex-col">
//       {/* Artwork Image */}
//       <div className="relative group h-64 w-full overflow-hidden">
//         <img
//           src={art.image.src}
//           alt={art.image.alt}
//           className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
//         />
//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         {/* Views Counter
//         <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs sm:text-sm px-3 py-1 rounded-full flex items-center opacity-80">
//           <FiEye className="w-4 h-4 mr-1" />
//           <span>{art.views || 0}</span>
//         </div> */}
//       </div>

//       {/* Card Content */}
//       <div className="p-5 flex-1 flex flex-col">
//         <h2 className="text-xl font-bold text-gray-900">{art.title}</h2>
//         <p className="text-gray-600 font-medium mt-1">{art.type}</p>
//         <p className="text-gray-500 text-sm mt-1">by {art.artist}</p>
//       </div>

//       {/* Footer Section */}
//       <div className="p-4 flex justify-center">
//         <Button variant="secondary" onClick={handleViewMore}>
//           View More
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtCardPerArtist;


// import React from "react";
// import { FiEye } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// interface Art {
//   title: string;
//   year?: number;
//   type: string;
//   dimensions?: string;
//   views?: number;
//   image: {
//     src: string;
//     alt: string;
//   };
//   artist: string;
// }

// interface ArtCardPerArtistProps {
//   art: Art;
// }

// const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
//   const navigate = useNavigate();

//   const handleViewMore = () => {
//     navigate("/viewArts", { state: art });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] w-80 sm:w-96 h-[470px] mx-auto flex flex-col group">
//       {/* Artwork Image */}
//       <div className="relative group-hover:scale-110 transition-all duration-500 h-64 w-full overflow-hidden">
//         <img
//           src={art.image.src}
//           alt={art.image.alt}
//           className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500"
//         />
//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>

//       {/* Card Content (Initially Hidden) */}
//       <div className="p-5 flex-1 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//         <h2 className="text-xl font-bold text-gray-900">{art.title}</h2>
//         <p className="text-gray-600 font-medium mt-1">{art.type}</p>
//         <p className="text-gray-500 text-sm mt-1">by {art.artist}</p>
//       </div>

//       {/* Footer Section (Initially Hidden) */}
//       <div className="p-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//         <Button variant="secondary" onClick={handleViewMore}>
//           View More
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtCardPerArtist;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// interface Art {
//   title: string;
//   year?: number;
//   type: string;
//   dimensions?: string;
//   views?: number;
//   image: {
//     src: string;
//     alt: string;
//   };
//   artist: string;
// }

// interface ArtCardPerArtistProps {
//   art: Art;
// }

// const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
//   const navigate = useNavigate();

//   const handleViewMore = () => {
//     navigate("/viewArts", { state: art });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] w-80 sm:w-96 h-[470px] mx-auto flex flex-col group">
//       {/* Artwork Image */}
//       <div className="relative h-64 w-full overflow-hidden">
//         <img
//           src={art.image.src}
//           alt={art.image.alt}
//           className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
//         />
//         {/* Hover Overlay with Title and Artist */}
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
//           <h2 className="text-2xl font-bold text-white">{art.title}</h2>
//           <p className="text-lg text-white mt-2">by {art.artist}</p>
//         </div>
//       </div>

//       {/* Card Content (Initially Hidden) */}
//       <div className="p-5 flex-1 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//         <p className="text-gray-600 font-medium mt-1">{art.type}</p>
//         <p className="text-gray-500 text-sm mt-1">Dimensions: {art.dimensions || "N/A"}</p>
//       </div>

//       {/* Footer Section (Initially Hidden) */}
//       <div className="p-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//         <Button variant="secondary" onClick={handleViewMore}>
//           View More
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtCardPerArtist;


import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button";

interface Art {
  title: string;
  year?: number;
  type: string;
  dimensions?: string;
  views?: number;
  image: {
    src: string;
    alt: string;
  };
  artist: string;
}

interface ArtCardPerArtistProps {
  art: Art;
}

const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/viewArts", { state: art });
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] w-80 sm:w-96 h-[470px] mx-auto flex flex-col group">
      {/* Image Container */}
      <div className="relative group w-full h-full overflow-hidden">
        <img
          src={art.image.src}
          alt={art.image.alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Hover Effect - Title, Artist, and Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center text-center p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700">
            {art.title}
          </h2>
          <p className="text-lg text-white mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700 delay-100">
            by {art.artist}
          </p>
          <Button
            variant="secondary"
            onClick={handleViewMore}
            className="mt-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700 delay-200"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtCardPerArtist;
