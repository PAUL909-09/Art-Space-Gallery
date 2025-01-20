import { useLocation } from "react-router-dom";
import { ArtisyImage, ArtsData } from "../../config/config";
import { useEffect } from "react";

const ViewArts = () => {
  const location = useLocation();
  const art = location.state;

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <p className="text-3xl font-light --text-gray-600">
          No artwork selected
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Artwork Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            <div className="relative h-[600px]">
              <img
                src={art.image.src}
                alt={art.image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Details Container */}
            <div className="p-12 flex flex-col h-full justify-between bg-white">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {art.title}
                </h1>

                <div className="space-y-6">
                  <div>
                    <span className="text-red-600 font-semibold text-lg">
                      Artist
                    </span>
                    <p className="text-2xl text-gray-800 mt-1">{art.artist}</p>
                  </div>

                  <div>
                    <span className="text-red-600 font-semibold text-lg">
                      Type
                    </span>
                    <p className="text-2xl text-gray-800 mt-1">{art.type}</p>
                  </div>

                  <div>
                    <span className="text-red-600 font-semibold text-lg">
                      Description
                    </span>
                    <p className="text-lg leading-relaxed text-gray-700 mt-2">
                      {art.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
                >
                  Return to Gallery
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/contactUs";
                  }}
                  className="flex-1 py-4 border-2 border-gray-200 text-gray-800 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profile Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        <div className="max-w-sm w-full bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 overflow-hidden">
          {/* Header Section with Background Image */}
          <div className="relative">
            <img
       
              className="w-full h-40 rounded-t-xl object-cover bg-gradient-to-r from-black to-[#C62A35]"
            />
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
              <div className="w-28 h-28 border-4 border-white rounded-full shadow-md overflow-hidden">
                <img
                  src={ArtisyImage[0].src}
                  alt={ArtisyImage[0].Alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-20 pb-8 px-6 text-center">
            <h2 className="text-2xl font-bold text-black">{ArtisyImage[0].Name}</h2>
            {/* <p className="text-sm text-gray-600">{ArtisyImage[0].email}</p> */}

            {/* Tagline */}
            <div className="mt-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                Professional Artist
              </span>
            </div>

            {/* Button Section with C62A35 Color */}
            <div className="mt-6">
              <button className="px-6 py-2 bg-[#C62A35] text-white font-medium text-sm rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:ring-red-300">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>






      {/* Related Arts */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-black">
              Explore More Artworks
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ArtsData.slice(0, 3).map((art, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={art.image.src}
                    alt={art.image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm mb-2">{art.type}</p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-gray-600">{art.artist}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="text-sm text-gray-500">Available</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{art.type}
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-xs rounded-full">
                      #Featured
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewArts;
