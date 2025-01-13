import React from "react";
import { APP_COLORS, ArtsData, ArtsImage } from "../../config/config";
import { useNavigate } from "react-router-dom";

const AllArt = () => {
  const navigate = useNavigate();

  const handleViewMore = (art: {
    title: string;
    artist: string;
    type: string;
    description: string;
    image: { src: string; alt: string };
  }) => {
    navigate("/viewArts", { state: art });
  };

  return (
    <div>
      <section className={`relative min-h-screen bg-${APP_COLORS.primary} p-8`}>
        <h1
          className={`text-6xl font-extrabold text-center mb-10 text-${APP_COLORS.secondary}`}
        >
          ALL ARTS
        </h1>
        <div className="relative w-full h-full flex flex-wrap justify-center items-center">
          {ArtsImage.map((image, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative rounded-lg shadow-lg overflow-hidden group transition-all duration-500 ease-in-out`}
              >
                <div
                  className={`transform ${
                    isEven
                      ? "rotate-3 translate-y-5"
                      : "-rotate-3 -translate-y-5"
                  } group-hover:rotate-0 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-500`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 px-5">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          ARTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ArtsData.map((art, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={art.image.src}
                alt={art.image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{art.title}</h2>
                <p className="text-red-600 font-medium">Artist: {art.artist}</p>
                <p className="text-red-600 font-medium">Type: {art.type}</p>
                <p className="text-gray-700 text-sm mt-4">{art.description}</p>
                <button
                  onClick={() => handleViewMore(art)}
                  className="flex items-center justify-center mt-6 mx-auto bg-red-600 text-white px-6 py-2 shadow hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Custom position styles for each image
const getImagePositionStyles = (index: number) => {
  const positions = [
    { top: "10%", left: "90%" }, // Image 1
    { top: "10%", left: "40%" }, // Image 2
    { top: "10%", left: "75%" }, // Image 3
    { top: "45%", left: "10%" }, // Image 4
    { top: "45%", left: "50%" }, // Image 5
    { top: "45%", left: "80%" }, // Image 6
    { top: "70%", left: "5%" }, // Image 7
    { top: "70%", left: "80%" }, // Image 8
    { top: "100%", left: "10%" }, // Image 9
  ];

  return positions[index] || { top: "0%", left: "0%" };
};

export default AllArt;

