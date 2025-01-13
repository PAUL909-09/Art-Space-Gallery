import { useLocation } from "react-router-dom";
import { ArtsData } from "../../config/config";

const ViewArts = () => {
  const location = useLocation();
  const art = location.state;

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
            {/* Image Container */}
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
                <button className="flex-1 py-4 border-2 border-gray-200 text-gray-800 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  Share Artwork
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profile Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
            <div className="relative pt-20 pb-12 px-8 text-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src="https://via.placeholder.com/120"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-8 border-white shadow-lg object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Alma Lopez
              </h2>
              <p className="text-lg text-gray-600 mb-8">almalopez@email.com</p>

              <button className="w-full py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-300">
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
