// import React from "react";
// import Button from "../Buttons/button";

// interface ArtistProfileCardProps {
//   src: string;
//   alt: string;
//   name: string;
//   artisttype: string;
//   email: string;
//   instagram?: string;
//   facebook?: string;
//   description?: string;
//   onViewProfile: () => void;
// }

// const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({
//   src,
//   alt,
//   name,
//   artisttype,
//   email,
//   onViewProfile,
// }) => {
//   return (
//     <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105 p-6 text-center max-w-sm w-full mx-auto group min-h-[320px] flex flex-col justify-between">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-700 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

//       {/* Profile Image */}
//       <div className="relative">
//         <img
//           src={src}
//           alt={alt}
//           className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6"
//         />
//       </div>

//       {/* Artist Name */}
//       <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300 truncate w-full">
//         {name}
//       </h3>

//       {/* Artist Email */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 truncate w-full">
//         {artisttype}
//       </p>

//       {/* Artist Email */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 truncate w-full">
//         {email}
//       </p>

//       {/* Button Section */}
//       <div className="mt-auto">
//         <Button variant="secondary" onClick={onViewProfile}>
//           <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></span>
//           <span className="relative">View</span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtistProfileCard;

// import React, { useState, useRef, useEffect } from "react";
// import Button from "../Buttons/button";

// interface ArtistProfileCardProps {
//   src: string;
//   alt: string;
//   name: string;
//   artisttype: string;
//   email: string;
//   instagram?: string;
//   facebook?: string;
//   description?: string;
//   onViewProfile: () => void;
// }

// const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({
//   src,
//   alt,
//   name,
//   artisttype,
//   email,
//   onViewProfile,
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const img = imageRef.current;
//     const handleLoad = () => {
//       setIsLoaded(true);
//     };

//     if (img && img.complete) {
//       handleLoad();
//     } else if (img) {
//       img.addEventListener("load", handleLoad);
//       return () => img.removeEventListener("load", handleLoad);
//     }
//   }, []);
//   return (
//     <div className="relative bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 p-6 text-center max-w-sm w-full mx-auto min-h-[320px] flex flex-col justify-between">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-700 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

//       {/* Profile Image */}
//       <div className="relative">
//       <img
//           ref={imageRef}
//           src={src}
//           alt={alt}
//           className={`w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-75 ${
//             isLoaded ? "" : "invisible"
//           }`}
//           loading="lazy"
//         />
//         {!isLoaded && (
//           <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200 animate-pulse">
//             {/* Optional: Placeholder icon */}
//             {/* <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> */}
//           </div>
//         )}
//       </div>

//       {/* Artist Name */}
//       <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300 truncate w-full">
//         {name}
//       </h3>

//       {/* Artist Type */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 truncate w-full">
//         {artisttype}
//       </p>

//       {/* Artist Email */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 truncate w-full">
//         {email}
//       </p>

//       {/* Button Section */}
//       <div className="mt-auto relative group">
//         <Button variant="secondary" onClick={onViewProfile}>
//           {/* Hover effect for button */}
//           <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></span>
//           <span className="relative z-10">View Profile</span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtistProfileCard;


// import React, { useState, useRef, useEffect } from "react";
// import Button from "../Buttons/button";

// interface ArtistProfileCardProps {
//   src: string;
//   alt: string;
//   name: string;
//   artisttype: string;
//   email: string;
//   instagram?: string;
//   facebook?: string;
//   description?: string;
//   onViewProfile: () => void;
// }

// const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({
//   src,
//   alt,
//   name,
//   artisttype,
//   email,
//   onViewProfile,
// }) => {
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
//     <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 p-6 text-center max-w-sm w-full mx-auto min-h-[320px] flex flex-col justify-between border border-gray-200 backdrop-blur-lg">
//       {/* Minimal Color Hover Effect */}
//       <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
//       {/* Profile Image */}
//       <div className="relative">
//         <img
//           ref={imageRef}
//           src={src}
//           alt={alt}
//           className={`w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-105 ${
//             isLoaded ? "" : "invisible"
//           }`}
//           loading="lazy"
//         />
//         {!isLoaded && (
//           <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200 animate-pulse"></div>
//         )}
//       </div>

//       {/* Artist Name */}
//       <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
//         {name}
//       </h3>

//       {/* Artist Type */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
//         {artisttype}
//       </p>

//       {/* Artist Email */}
//       <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
//         {email}
//       </p>

//       {/* Button Section */}
//       <div className="mt-auto relative group">
//         <Button variant="secondary" onClick={onViewProfile} className="relative overflow-hidden">
//           <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//           <span className="relative z-10">View Profile</span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ArtistProfileCard;
import React, { useState, useRef, useEffect } from "react";
import Button from "../Buttons/button";

interface ArtistProfileCardProps {
  src: string;
  alt: string;
  name: string;
  artisttype: string;
  email: string;
  instagram?: string;
  facebook?: string;
  description?: string;
  onViewProfile: () => void;
}

const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({
  src,
  alt,
  name,
  artisttype,
  email,
  onViewProfile,
}) => {
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
    <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform p-6 text-center max-w-sm w-full mx-auto min-h-[320px] flex flex-col justify-between border border-gray-200 backdrop-blur-lg ${isLoaded ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}>
      {/* Minimal Color Hover Effect */}
      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Profile Image */}
      <div className="relative">
        {!isLoaded && (
          <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200 animate-spin border-4 border-gray-300 border-t-transparent"></div>
        )}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-105 ${
            isLoaded ? "" : "hidden"
          }`}
          loading="lazy"
        />
      </div>

      {isLoaded && (
        <>
          {/* Artist Name */}
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
            {name}
          </h3>

          {/* Artist Type */}
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
            {artisttype}
          </p>

          {/* Artist Email */}
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 truncate w-full">
            {email}
          </p>

          {/* Button Section */}
          <div className="mt-auto relative group">
            <Button variant="secondary" onClick={onViewProfile} className="relative overflow-hidden">
              <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10">View Profile</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ArtistProfileCard;
