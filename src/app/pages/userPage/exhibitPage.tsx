import { FiEye } from "react-icons/fi";
import { Image, ExhibitsData } from "../../config/config";
import SliderArrow from "../../components/Buttons/SliderArrow";
import { useState } from "react";
import ExhibitCard from "../../components/Cards/ExhibitCard";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Button from "../../components/Buttons/button";
import { useNavigate } from "react-router-dom";

const ExhibitPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const navigator = useNavigate();

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

  const handleViewMoreExhibits = (exhibits: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: { src: string; alt: string };
    views?: number;
  }) => {
    navigator("/viewExhibits", {
      state: { exhibitData: JSON.stringify(exhibits) },
    });
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image[1].src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-wide mb-12 animate-fade-in">
            EXHIBITIONS
          </h1>

          <div className="max-w-4xl text-center space-y-6">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Step into a world of creativity and inspiration! Art exhibitions
              bring together captivating works across various mediums, each
              telling its own unique story.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Discover the beauty, culture, and ideas that connect us all, and
              let the artwork spark your imagination and conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions List */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Current Exhibitions
          </h2>

          <div className="space-y-12">
            {ExhibitsData.map((exhibit, index) => (
              <div
                key={exhibit.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`}
              >
                <div className="md:w-1/2">
                  <img
                    src={exhibit.image.src}
                    alt={exhibit.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-end mb-4">
                      <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        <FiEye className="w-5 h-5" />
                        <span>{exhibit.views}</span>
                      </button>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {exhibit.title}
                    </h3>

                    <div className="space-y-4 text-gray-300">
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt /> {exhibit.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {exhibit.location}
                      </p>
                      <div className="border-l-4 border-red-500 pl-4 mt-6">
                        <p className="text-gray-400">{exhibit.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button
                      onClick={() => handleViewMoreExhibits(exhibit)}
                      variant="secondary"
                      className="w-full md:w-auto"
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Exhibits
          </h2>

          <div className="relative">
            <SliderArrow
              direction="left"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            />

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
                      onViewMore={() => handleViewMoreExhibits(exhibit)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <SliderArrow
              direction="right"
              onClick={handleNext}
              disabled={currentIndex + cardsPerPage >= ExhibitsData.length}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitPage;

// import { FiEye } from "react-icons/fi";
// import { Image, ExhibitsData, ExhibitsImages } from "../../config/config";
// import SliderArrow from "../../components/Buttons/SliderArrow";
// import { useState } from "react";
// import ExhibitCard from "../../components/Cards/ExhibitCard";
// import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
// import Button from "../../components/Buttons/button";
// import { useNavigate } from "react-router-dom";

// const ExhibitPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index of the first visible card
//   const cardsPerPage = 3;
//   const navigator = useNavigate();

//   const handleNext = () => {
//     if (currentIndex + cardsPerPage < ExhibitsImages.length) {
//       setCurrentIndex(currentIndex + cardsPerPage);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex - cardsPerPage >= 0) {
//       setCurrentIndex(currentIndex - cardsPerPage);
//     }
//   };

//   const handleViewMoreExhibits = (id: number) => {
//     navigator(`/viewExhibits?id=${id}`);
//     window.scrollTo(0, 0); // scroll to the top of the page
//   };

//   return (
//     <div>
//       <section
//         className="relative bg-cover bg-center"
//         style={{ backgroundImage: `url(${Image[1].src})`, height: "90vh" }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

//         {/* Top Heading */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
//           <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-wide drop-shadow-md animate-[pulse_1.5s_ease-in-out_2] hover:animate-none transition-all duration-500 ease-in-out">
//             EXHIBITIONS
//           </h1>
//         </div>

//         {/* Smaller Paragraphs at the Bottom */}
//         <div className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center px-6 md:px-12 lg:px-24">
//           <p className="text-white text-Montserrat text-base md:text-lg max-w-6xl leading-loose">
//             Step into a world of creativity and inspiration! Art exhibitions
//             bring together captivating works across various mediums, each
//             telling its own unique story. From bold paintings to
//             thought-provoking sculptures and innovative digital creations, these
//             showcases celebrate the power of artistic expression.
//           </p>

//           <p className="mt-4 text-white text-sm md:text-base max-w-12xl leading-relaxed">
//             Discover the beauty, culture, and ideas that connect us all, and let
//             the artwork spark your imagination and conversation. Experience art
//             that moves, inspires, and stays with you.
//           </p>
//         </div>
//       </section>

//       <section className="bg-gray-100 py-10">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-10">Art Exhibitions</h1>
//           <div className="space-y-12">
//             {ExhibitsData.map((exhibit, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 } items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
//               >
//                 {/* Image Section */}
//                 <img
//                   src={exhibit.image.src}
//                   alt={exhibit.image.alt}
//                   className="w-full md:w-1/2 h-50 md:h-auto object-cover"
//                 />
//                 {/* Text Section */}
//                 <div className="p-6 md:w-1/2 flex flex-col justify-between">
//                   <div>
//                     <div className="flex items-center justify-end mt-4">
//                       {/* Views Button */}
//                       <button
//                         className="flex justify-end bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
//                         onClick={() => alert(`Views for ${exhibit.title}: ${exhibit.views}`)}
//                       >
//                         <FiEye className="w-5 h-5 mr-2" />
//                         <span>{exhibit.views}</span>
//                       </button>
//                     </div>
//                     <h2 className="text-3xl font-bold mb-2">{exhibit.title}</h2>
//                     <p className="text-gray-500 mb-4 flex items-center">
//                       <FaCalendarAlt className="text-black mr-2" /> {exhibit.date}
//                     </p>
//                     <p className="text-gray-500 mb-4 flex items-center">
//                       <FaMapMarkerAlt className="text-black mr-2" /> {exhibit.location}
//                     </p>
//                     <div className="px-8">
//                       <h3 className="text-red-500 font-semibold mb-2">Description:</h3>
//                       <p className="text-gray-700 mb-4">{exhibit.description}</p>
//                     </div>
//                     <div className="p-2 bg-white flex justify-center">
//                       <Button
//                         onClick={() => handleViewMoreExhibits(index)}
//                         variant="secondary"
//                       >
//                         View More
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ExhibitPage;
