import { FiEye } from "react-icons/fi";
import { Image, ExhibitsData, ExhibitsImages } from "../../config/config";
import SliderArrow from "../../components/Buttons/SliderArrow";
import { useState } from "react";
import ExhibitCard from "../../components/Cards/ExhibitCard";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"
import Button from "../../components/Buttons/button";


const ExhibitPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index of the first visible card
  const cardsPerPage = 3; // Number of cards to show per slide
  // Number of cards to show per slide

  const handleNext = () => {
    if (currentIndex + cardsPerPage < ExhibitsImages.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };
  return (
    <div>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Image[2].src})`, height: "90vh" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        {/* Top Heading */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-wide drop-shadow-md animate-[pulse_1.5s_ease-in-out_2] hover:animate-none transition-all duration-500 ease-in-out">
            EXHIBITIONS
          </h1>
        </div>

        {/* Smaller Paragraphs at the Bottom */}
        <div className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center px-6 md:px-12 lg:px-24">
          <p className="text-white text-Montserrat text-base md:text-lg max-w-6xl leading-loose">
            Step into a world of creativity and inspiration! Art exhibitions
            bring together captivating works across various mediums, each
            telling its own unique story. From bold paintings to
            thought-provoking sculptures and innovative digital creations, these
            showcases celebrate the power of artistic expression.
          </p>

          <p className="mt-4 text-white text-sm md:text-base max-w-12xl leading-relaxed">
            Discover the beauty, culture, and ideas that connect us all, and let
            the artwork spark your imagination and conversation. Experience art
            that moves, inspires, and stays with you.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Art Exhibitions</h1>
          <div className="space-y-12">
            {ExhibitsData.map((exhibit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
              >
                {/* Image Section */}
                <img
                  src={exhibit.image.src}
                  alt={exhibit.image.alt}
                  className="w-full md:w-1/2 h-50 md:h-auto object-cover"
                />
                {/* Text Section */}
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-end mt-4">
                      {/* Views Button */}
                      <button
                        className="flex justify-end bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
                        onClick={() => alert(`Views for ${exhibit.title}: ${exhibit.views}`)}
                      >
                        <FiEye className="w-5 h-5 mr-2" />
                        <span>{exhibit.views}</span>
                      </button>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{exhibit.title}</h2>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <FaCalendarAlt className="text-black mr-2" /> {exhibit.date}
                    </p>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <FaMapMarkerAlt className="text-black mr-2" /> {exhibit.location}
                    </p>
                    <div className="px-8">


                      <h3 className="text-red-500 font-semibold mb-2">Description:</h3>
                      <p className="text-gray-700 mb-4">{exhibit.description}</p>

                    </div>
                    <div className="p-2 bg-white flex justify-center">
                      <Button
                        variant="secondary"
                      >
                        View More
                      </Button>
                    </div>
                  </div>



                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 mt-5">
            {ExhibitsData.map((exhibit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "bg-[#C62A35]" : "bg-black"
                  } text-white rounded-lg shadow-lg overflow-hidden`}
              >
                {/* Image Section */}
                <img
                  src={exhibit.image.src}
                  alt={exhibit.image.alt}
                  className="w-full md:w-1/2 h-40 md:h-auto object-cover"
                />
                {/* Text Section */}
                <div className="p-6 mx-12 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-end mt-4">
                      {/* Views Button */}
                      <button
                        className="flex justify-end bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
                        onClick={() => alert(`Views for ${exhibit.title}: ${exhibit.views}`)}
                      >
                        <FiEye className="w-5 h-5 mr-2" />
                        <span>{exhibit.views}</span>
                      </button>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{exhibit.title}</h2>
                    <p className="text-gray-100 mb-4 flex items-center">
                      <FaCalendarAlt className="text-white mr-2" /> {exhibit.date}
                    </p>
                    <p className="text-gray-100 mb-4 flex items-center">
                      <FaMapMarkerAlt className="text-white mr-2" /> {exhibit.location}
                    </p>
                    <div className="px-8">


                      <h3 className="text-grey-400 font-semibold mb-2">Description:</h3>
                      <p className="text-gray-100 mb-4">{exhibit.description}</p>

                    </div>
                    <div className="p-2  flex justify-center">
                      <Button
                        variant="secondary"
                      >
                        View More
                      </Button>
                    </div>
                  </div>



                </div>
              </div>
            ))}
          </div>


        </div>
      </section>;

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
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)
                  }%)`,
                width: `${(100 * ExhibitsImages.length) / cardsPerPage}%`,
              }}
            >
              {ExhibitsImages.map((exhibit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <ExhibitCard
                    src={exhibit.src}
                    alt={exhibit.alt}
                    title={exhibit.title}
                    date={exhibit.date}
                    location={exhibit.location}
                    description={exhibit.description}
                    isExpanded={false} // Removed expanded logic for simplicity
                    onReadMore={() => { }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <SliderArrow
            direction="right"
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= ExhibitsImages.length}
          />
        </div>
      </section>
    </div>
  );
};

export default ExhibitPage;
