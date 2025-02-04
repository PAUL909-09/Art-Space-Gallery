// import React from "react";
// import { APP_COLORS, ArtsData, ArtsImage } from "../../config/config";
// import { useNavigate } from "react-router-dom";

// const AllArtAdmin = () => {
//   const navigate = useNavigate();

//   const handleViewMore = (art: {
//     title: string;
//     artist: string;
//     type: string;
//     description: string;
//     image: { src: string; alt: string };
//   }) => {
//     navigate("/viewArtsAdmin", { state: art });
//     window.scrollTo(0, 0); // scroll to the top of the page
//   };
//   return (
//     <div>
//       {" "}
//       <section className={`relative min-h-screen bg-${APP_COLORS.primary} p-8`}>
//         {/* Title */}
//         <h1
//           className={`text-6xl font-extrabold text-center mb-10 text-${APP_COLORS.secondary}`}
//         >
//           ALL ARTS
//         </h1>

//         {/* Creative Image Layout */}
//         <div className="relative w-full h-full flex flex-wrap justify-center items-center">
//           {ArtsImage.map((image, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <div
//                 key={index}
//                 className={`relative rounded-lg shadow-lg overflow-hidden group transition-all duration-500 ease-in-out`}
//               // style={{
//               //   width: `${image.width}px`,
//               //   height: `${image.height}px`,
//               // }}
//               >
//                 {/* Image */}
//                 <div
//                   className={`transform ${isEven
//                       ? "rotate-3 translate-y-5"
//                       : "-rotate-3 -translate-y-5"
//                     } group-hover:rotate-0 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-500`}
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 {/* Caption */}
//                 {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   {image.alt}
//                 </div> */}
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* backup */}
//       {/* <section className={`relative min-h-screen bg-${APP_COLORS.primary} p-8`}>
       
//         <h1
//           className={`text-6xl font-extrabold text-center mb-10 text-${APP_COLORS.secondary}`}
//         >
//           ALL ARTS
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
//           {ArtsImage.map((image, index) => {
//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl"
//               >
   
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-64 object-cover rounded-t-lg"
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
//                   <h2 className="text-xl font-bold text-white mb-2">
//                     {image.alt}
//                   </h2>
//                   <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section> */}
//       {/* Art section */}
//       <section className="bg-white py-16 px-5">
//         <h1 className="text-4xl font-bold text-center text-black mb-12">
//           ARTS
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {ArtsData.map((art, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={art.image.src}
//                 alt={art.image.alt}
//                 className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold text-gray-800">{art.title}</h2>
//                 <p className="text-red-600 font-medium">Artist: {art.artist}</p>
//                 <p className="text-red-600 font-medium">Type: {art.type}</p>
//                 <p className="text-gray-700 text-sm mt-4">{art.description}</p>
//                 <button
//                   onClick={() => handleViewMore(art)}
//                   className="flex items-center justify-center mt-6 mx-auto bg-red-600 text-white px-6 py-2 shadow hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
//                 >
//                   View More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// // Custom position styles for each image
// const getImagePositionStyles = (index: number) => {
//   const positions = [
//     { top: "10%", left: "90%" }, // Image 1
//     { top: "10%", left: "40%" }, // Image 2
//     { top: "10%", left: "75%" }, // Image 3
//     { top: "45%", left: "10%" }, // Image 4
//     { top: "45%", left: "50%" }, // Image 5
//     { top: "45%", left: "80%" }, // Image 6
//     { top: "70%", left: "5%" }, // Image 7
//     { top: "70%", left: "80%" }, // Image 8
//     { top: "100%", left: "10%" }, // Image 9
//   ];

//   return positions[index] || { top: "0%", left: "0%" };
// };

// export default AllArtAdmin;

import { APP_COLORS, ARTIST_PROFILE, allImages } from "../../config/config";
import { useNavigate } from "react-router-dom";
import ArtCard from "../../components/Cards/ArtCard";

const AllArtAdmin = () => {
  const navigate = useNavigate();

  // const handleViewMore = (art: any) => {
  //   navigate("/viewArtsArtist", { state: art });
  //   window.scrollTo(0, 0);
  // };

  // const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
  //   artist.ARTIST_DATA.ArtWork.map((art) => ({
  //     ...art,
  //     artist: artist.Name,
  //   }))
  // );

  const   handleViewArtistProfile = (artist: any) => {
    const artistData = {
      src: artist.ARTIST_DATA.Profile.src, // Pass image src correctly
      alt: artist.ARTIST_DATA.Profile.alt, // Pass image alt correctly
      name: artist.Name,
      artisttype: artist.ArtistType,
      email: artist.Email,
      instagram: artist.Instagram,
      facebook: artist.Facebook,
      description: artist.Description,
      artworks: artist.ARTIST_DATA.ArtWork,
    };

    navigate("/viewArtistProfileAdmin", {
      state: { artistData }, // No need to stringify anymore
    });
    window.scrollTo(0, 0);
  };

  const handleViewMore = (art: any) => {
    navigate("/viewArtsAdmin", { state: art });
    window.scrollTo(0, 0);
  };

  const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
    artist.ARTIST_DATA.ArtWork.map((art) => ({
      ...art,
      artist: artist.Name, // Add artist name to each artwork
    }))
  );
  return (
    <div>
      <section
        className="relative p-8"
        style={{ backgroundColor: APP_COLORS.primary }}
      >
        <h1
          className="text-6xl font-extrabold text-center mb-10"
          style={{ color: APP_COLORS.secondary }}
        >
          ALL ARTS
        </h1>
        <div className="relative w-full h-full flex flex-wrap justify-center items-center">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden group transition-all duration-500 ease-in-out m-4" // Added m-4 for margin
            >
              <div
                className={`transform 
                    group-hover:scale-110 transition-all duration-500`} // Removed rotate and translate
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-[200px] h-[200px] rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-5">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          ARTS
        </h1>
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
            <ArtCard key={index} art={art} onViewMore={() => handleViewMore(art)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllArtAdmin;