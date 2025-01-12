import {
  ArtisyImage,
  Image,
  ExhibitsImages,
  ArtsData,
} from "../../config/config";
import Button from "../../components/Buttons/button";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-5 sm:py-28 lg:py-36 flex items-center justify-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${Image[0].src})`, height: "90vh" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-lg sm:max-w-xl md:max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-[pulse_1.5s_ease-in-out_2] hover:animate-none transition-all duration-700 ease-in-out">
            The Lopenze Art Space:
            <br />A Hub of Creativity and Inspiration
          </h1>
          <p className="text-base sm:text-lg md:text-xl animate-[pulse_1.5s_ease-in-out_2] hover:animate-none transition-all duration-500 ease-in-out">
            The Lopenze Art Space is dedicated to showcasing the vibrant arts
            and cultural scene. With curated exhibitions and inspiring
            collaborations, it’s the perfect platform for creative exploration.
          </p>
          <a
            href="#explore"
            className="mt-6 sm:mt-8 inline-block bg-[#C62A35] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
              Explore More
          </a>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-900 opacity-100"></div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 relative z-10 text-white transition-all duration-500 ease-in-out hover:scale-105">
          <span className="text-gray-300">A</span>{" "}
          <span className="text-red-600">Vision</span>{" "}
          <span className="text-gray-300">for the</span>{" "}
          <span className="text-red-600">Arts</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto relative z-10 text-gray-200 leading-relaxed">
          The Lopenze Art Space was established with the vision of promoting
          local and international artists, offering a platform for them to
          exhibit their work and share their stories. Its mission revolves
          around inclusivity, innovation, and the celebration of artistic
          diversity. The gallery provides a nurturing environment where emerging
          and established artists can flourish, making it a cornerstone of the
          cultural and artistic fabric of the region.
        </p>
      </section>

      {/* Exhibits */}
      <section className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          EXHIBITS
        </h2>
        <div className="relative flex items-center justify-between">
          {/* Left Arrow */}
          <button className="absolute left-0 z-10 bg-white rounded-full shadow-lg p-3 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300 ease-in-out">
            <span className="text-gray-800 text-3xl">&larr;</span>
          </button>

          {/* Exhibit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8 transition-all duration-500">
            {ExhibitsImages.map((exhibit, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-64">
                  <img
                    src={exhibit.src}
                    alt={exhibit.alt}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <p className="text-lg font-bold text-center transition-all duration-500 ease-in-out">
                      {exhibit.title}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 transition-all duration-500 ease-in-out">
                    {exhibit.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 transition-all duration-500 ease-in-out">
                    {exhibit.date}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed transition-all duration-500 ease-in-out">
                    {exhibit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 z-10 bg-white rounded-full shadow-lg p-3 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300 ease-in-out">
            <span className="text-gray-800 text-3xl">&rarr;</span>
          </button>
        </div>
      </section>

      {/* Artists */}
      <section className="relative min-h-screen bg-red-50 py-16 px-5 backdrop-blur-md">
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-7xl font-bold text-gray-900">
            <span className="relative z-10">LOPENZE</span>
            <span className="absolute inset-0 bg-red-500 h-8 top-1/2 -translate-y-1/2 z-0"></span>
          </h2>

          <div>
            <h2 className="relative inline-block text-9xl font-bold text-gray-900 mt-2">
              <span className="relative z-10 text-red-500">ARTISTS</span>
              <span className="absolute inset-0 bg-gray-300 h-10 top-1/2 -translate-y-1/2 z-0"></span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 mx-auto">
          {ArtisyImage.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 p-4 text-center"
            >
              <img
                src={artist.src}
                alt={artist.Alt}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform duration-500 transform hover:scale-125"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {artist.Name}
              </h3>
              <p className="text-sm text-gray-600">{artist.Email}</p>

              {/* Using the Button component */}
              <div className="font-Montserrat mt-5">
                <Button
                  variant="secondary"
                  className="transition-transform duration-500 transform hover:scale-105"
                >
                  Contact Artist
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wide Selection of Arts */}
      <section className="relative min-h-screen py-16 px-5 bg-gray-100">
        {/* Title Section */}
        <h2 className="text-6xl font-extrabold text-center text-red-600 tracking-tight mb-16">
          <span className="relative inline-block">WIDE SELECTIONS OF ARTS</span>
        </h2>

        {/* Categories Section */}
        <div className="bg-black py-10 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example Category */}
            {[
              "Oil Painting",
              "Portrait Photography",
              "Watercolor",
              "Abstract Photography",
              "Painting",
              "Digital Collage",
              "Sculptures",
              "2D Digital Illustration",
              "Motion Graphics",
              "Clay Modeling",
            ].map((category, index) => (
              <button
                key={index}
                className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Art section */}
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
                <button className="flex items-center justify-center mt-6 mx-auto bg-red-600 text-white px-6 py-2  shadow hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
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

export default LandingPage;
