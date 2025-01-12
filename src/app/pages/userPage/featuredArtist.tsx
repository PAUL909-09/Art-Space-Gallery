import { ArtisyImage } from "../../config/config";
import Button from "../../components/Buttons/button";

const FeaturedArtist = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="font-Montserrat font-black text-8xl sm:text-6xl lg:text-8xl text-gray-900 animate-[pulse_1.5s_ease-in-out_2] hover:animate-[swing_1s_ease-in-out_2] transition-all duration-700 ease-in-out">
        FEATURED ARTIST
        </h1>
      </div>

      <div className="flex items-center justify-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto px-4 mt-10">
        {ArtisyImage.map((artist, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4 flex flex-col"
          >
            <img
              src={artist.src}
              className="w-full h-56 object-cover mb-4 rounded-t-lg transition-transform duration-300 transform hover:scale-110"
              alt={artist.Alt}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {artist.Name}
            </h3>
            <p className="flex items-center text-sm text-gray-600 mb-4">{artist.Email}</p>
            <Button className="bg-black text-white mt-auto">VIEW MORE</Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto px-4 mt-10">
        {ArtisyImage.map((artist, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4 flex flex-col"
          >
            <img
              src={artist.src}
              className="w-full h-56 object-cover mb-4 rounded-t-lg transition-transform duration-300 transform hover:scale-110"
              alt={artist.Alt}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {artist.Name}
            </h3>
            <p className="flex items-center text-sm text-gray-600 mb-4">{artist.Email}</p>
            <Button className="bg-black text-white mt-auto">VIEW MORE</Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto px-4 mt-10">
        {ArtisyImage.map((artist, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4 flex flex-col"
          >
            <img
              src={artist.src}
              className="w-full h-56 object-cover mb-4 rounded-t-lg transition-transform duration-300 transform hover:scale-110"
              alt={artist.Alt}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {artist.Name}
            </h3>
            <p className="flex items-center text-sm text-gray-600 mb-4">{artist.Email}</p>
            <Button className="bg-black text-white mt-auto">VIEW MORE</Button>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default FeaturedArtist;

