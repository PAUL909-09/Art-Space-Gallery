// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// const ArtCard = ({ art }) => {
//     const navigate = useNavigate();

//     const handleViewMore = () => {
//         navigate("/viewArts", { state: art });
//         window.scrollTo(0, 0);
//     };

//     return (
//         <div className="w-80 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center">
//             {/* Artwork Image - Larger display */}
//             <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
//                 <img
//                     src={art.image?.src || "fallback-image.jpg"}
//                     alt={art.image?.alt || "Artwork"}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                 />
//             </div>

//             {/* Artwork Title & Artist */}
//             <div className="p-5 text-center flex-1 flex flex-col justify-center">
//                 <h2 className="text-xl font-semibold text-gray-800">{art.title}</h2>
//                 <p className="text-red-600 font-medium mt-1">{art.artist}</p>
//             </div>

//             {/* Centered Button */}
//             <div className="pb-4 flex justify-center w-full">
//                 <Button variant="secondary" onClick={handleViewMore}>
//                     View More
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ArtCard;


// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../Buttons/button";

// const ArtCard = ({ art }) => {
//   const navigate = useNavigate();
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const img = imageRef.current;
//     const handleLoad = () => {
//       setIsLoaded(true);
//     };

//     if (img && img.complete) {
//       // Image already cached or loaded instantly
//       handleLoad();
//     } else if (img) {
//       // Add load event listener for when the image loads
//       img.addEventListener("load", handleLoad);
//       return () => img.removeEventListener("load", handleLoad); // Cleanup listener
//     }
//   }, []); // Run only once when the component mounts

//   const handleViewMore = () => {
//     navigate("/viewArts", { state: art });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="w-80 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center">
//       {/* Artwork Image - Larger display */}
//       <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
//         <img
//           ref={imageRef}
//           src={art.image?.src || "fallback-image.jpg"}
//           alt={art.image?.alt || "Artwork"}
//           className={`w-full h-full object-cover transition-opacity duration-500 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           loading="lazy"
//         />
//         {!isLoaded && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Placeholder (e.g., spinner or blurred preview) */}
//             <div className="w-12 h-12 rounded-full animate-spin border-4 border-t-blue-500" />
//           </div>
//         )}
//       </div>

//       {/* Artwork Title & Artist */}
//       <div className="p-5 text-center flex-1 flex flex-col justify-center">
//         <h2 className="text-xl font-semibold text-gray-800">{art.title}</h2>
//         <p className="text-red-600 font-medium mt-1">{art.artist}</p>
//       </div>

//       {/* Centered Button */}
//       <div className="pb-4 flex justify-center w-full">
//         <Button variant="secondary" onClick={handleViewMore}>
//           View More
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtCard;

// import { useState, useEffect, useRef } from "react";
// import Button from "../Buttons/button";

// interface ArtCardProps {
//   art: any;
//   onViewMore?: () => void;
// }

// const ArtCard: React.FC<ArtCardProps> = ({ art, onViewMore }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const img = imageRef.current;
//     const handleLoad = () => setIsLoaded(true);

//     if (img && img.complete) {
//       handleLoad();
//     } else if (img) {
//       img.addEventListener("load", handleLoad);
//       return () => img.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   return (
//     <div
//       className="w-96 h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center cursor-pointer relative"
//     >
//       <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
//         <img
//           ref={imageRef}
//           src={art.image?.src || "fallback-image.jpg"}
//           alt={art.image?.alt || "Artwork"}
//           className={`w-full h-full object-cover transition-opacity duration-500 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           loading="lazy"
//         />
//         {!isLoaded && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-16 h-16 rounded-full animate-spin border-4 border-t-blue-500" />
//           </div>
//         )}
//         <div
//           className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-50 transition-opacity duration-300 blur-2xl"
//         ></div>
//       </div>

//       <div className="p-6 text-center flex-1 flex flex-col justify-between">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
//           {art.title}
//         </h2>
//         <p className="text-red-600 font-medium text-lg mb-4">{art.artist}</p>

//         {onViewMore && (
//           <Button variant="secondary" onClick={onViewMore} className="mb-2">
//             View More
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ArtCard;

import { useState, useEffect, useRef } from "react";
import Button from "../Buttons/button";

interface ArtCardProps {
  art: any;
  onViewMore?: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ art, onViewMore }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    const handleLoad = () => setIsLoaded(true);

    if (img && img.complete) {
      handleLoad();
    } else if (img) {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      className="w-80 max-w-xs h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center cursor-pointer relative"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
        <img
          ref={imageRef}
          src={art.image?.src || "fallback-image.jpg"}
          alt={art.image?.alt || "Artwork"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full animate-spin border-4 border-t-blue-500" />
          </div>
        )}
        <div
          className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-50 transition-opacity duration-300 blur-2xl"
        ></div>
      </div>

      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 truncate mb-2" title={art.title}>
          {art.title}
        </h2>
        <p className="text-red-600 font-medium text-sm mb-4 truncate" title={art.artist}>{art.artist}</p>

        {onViewMore && (
          <Button variant="secondary" onClick={onViewMore} className="mb-2">
            View More
          </Button>
        )}
      </div>
    </div>
  );
};

export default ArtCard;
