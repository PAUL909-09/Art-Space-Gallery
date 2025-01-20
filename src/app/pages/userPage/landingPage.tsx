import {
  ArtisyImage,
  ExhibitsData,
  ArtsData,
  LandingPageImage,
} from "../../config/config";
import ExhibitCard from "../../components/Cards/ExhibitCard";
import { useState } from "react";
import SliderArrow from "../../components/Buttons/SliderArrow";
import ArtistProfileCard from "../../components/Cards/ArtistProfileCard";
import ArtCard from "../../components/Cards/ArtCard";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index of the first visible card
  const cardsPerPage = 3; // Number of cards to show per slide
  // Number of cards to show per slide

  const handleNext = () => {
    if (currentIndex + cardsPerPage < ExhibitsData.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate visible artists
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleArtists = ArtisyImage.slice(startIndex, endIndex);

  // Handle arrow clicks
  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (endIndex < ArtisyImage.length) setCurrentPage((prev) => prev + 1);
  };
  function handlePrev(): void {
    throw new Error("Function not implemented.");
  }

  const navigate = useNavigate();

  const handleViewExhibit = (exhibit: any) => {
    const exhibitData = {
      id: exhibit.id,
      title: exhibit.title,
      date: exhibit.date,
      location: exhibit.location,
      description: exhibit.description,
      image: { src: exhibit.image.src, alt: exhibit.image.alt },
      views: exhibit.views,
    };

    navigate("/viewExhibits", {
      state: { exhibitData: JSON.stringify(exhibitData) },
    });
    window.scrollTo(0, 0);
  };

  const handleViewArtistProfile = (artist: any) => {
    const artistData = {
      src: artist.src,
      alt: artist.Alt,
      name: artist.Name,
      email: artist.Email,
      instagram: artist.Instagram,
      facebook: artist.Facebook,
      description: artist.Description,
    };

    navigate("/viewArtistProfile", {
      state: { artistData: JSON.stringify(artistData) },
    });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-5 sm:py-28 lg:py-36 flex items-center justify-center transition-all duration-700 ease-in-out animate-[slideIn_1s_ease-in-out_1]"
        style={{
          backgroundImage: `url(${
            LandingPageImage[currentIndex % LandingPageImage.length].src
          })`,
          height: "90vh",
        }}
      >
        <div className="flex items-center justify-start min-h-screen">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg w-1/2 text-left ml-10">
            <div className="text-4xl font-semibold">
              <h1>The Lopenze Art Space: </h1>
              <h2>
                A Hub of{" "}
                <span className="text-[#C62A35] font-bold">Creativity</span>
              </h2>
              <h2>
                and{" "}
                <span className="text-[#C62A35] font-bold">Inspiration.</span>
              </h2>
            </div>

            <p className="mt-6">
              The Lopenze Art Space, often referred to as the Lopenze Art
              Gallery, is a vibrant cultural landmark dedicated to showcasing
              artistic expression and fostering creativity. Located at the heart
              of its community, the gallery is a sanctuary for artists, art
              enthusiasts, and visitors seeking to immerse themselves in diverse
              forms of art.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-black opacity-100"></div>
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
          <SliderArrow
            direction="left"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          />

          {/* Exhibit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-6 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerPage)
                }%)`,
                width: `${(100 * ExhibitsData.length) / cardsPerPage}%`,
              }}
            >
              {ExhibitsData.map((exhibit) => (
                <div
                  key={exhibit.id}
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <ExhibitCard
                    id={exhibit.id}
                    src={exhibit.image.src}
                    alt={exhibit.image.alt}
                    title={exhibit.title}
                    date={exhibit.date}
                    location={exhibit.location}
                    description={exhibit.description}
                    views={exhibit.views}
                    isExpanded={false}
                    onViewMore={() => handleViewExhibit(exhibit)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <SliderArrow
            direction="right"
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= ExhibitsData.length}
          />
        </div>
      </section>

      {/* Artists */}
      <section className="relative min-h-screen bg-red-50 py-16 px-5 backdrop-blur-md">
        {/* Header Section */}
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

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mx-auto">
          {visibleArtists.map((artist, index) => (
            <ArtistProfileCard
              key={index}
              src={artist.src}
              alt={artist.Alt}
              name={artist.Name}
              email={artist.Email}
              instagram={artist.Instagram}
              facebook={artist.Facebook}
              description={artist.Description}
              onViewProfile={() => handleViewArtistProfile(artist)}
            />
          ))}
        </div>
        {/* Pagination Arrows */}
        <div className="flex justify-between w-full">
          <SliderArrow
            direction="left"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          />
          <SliderArrow
            direction="right"
            onClick={handleNextPage}
            disabled={endIndex >= ArtisyImage.length}
          />
        </div>
      </section>
      <section className="w-full ">
        <h2 className="text-8xl font-extrabold text-end text-[#C62A35] tracking-tight mb-16 mt-4">
          <span className="mr-5">WIDE SELECTIONS OF ARTS</span>
        </h2>

        <div className="bg-black py-10 shadow-lg">
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
      {/* <section className="bg-white py-16 px-5">
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
      </section> */}

      <section className="bg-white py-16 px-5">
        <h1 className="text-7xl font-extrabold text-center mb-12 relative">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#C62A35]"
            style={{ backgroundColor: "#FAF9F6" }}
          >
            ARTS
          </span>
          {/* Decorative line and animated dot */}
          <div className="relative mt-4 flex justify-center items-center">
            <div
              className="w-24 h-1 bg-gradient-to-r from-black to-[#C62A35] rounded"
              style={{ backgroundColor: "#FAF9F6" }}
            ></div>
            {/* <span
              className="w-3 h-3 bg-[#C62A35] rounded-full animate-bounce ml-2"
              style={{ borderColor: "black", borderWidth: "1px" }}
            ></span> */}
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ArtsData.map((art, index) => (
            <ArtCard key={index} art={art} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
