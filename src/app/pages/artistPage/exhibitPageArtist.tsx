import { Image, ExhibitsData, ExhibitsImages } from "../../config/config";

const ExhibitPage = () => {
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
          <h1 className="text-4xl font-bold text-center mb-10">
            Art Exhibitions
          </h1>
          <div className="space-y-12">
            {ExhibitsData.map((exhibit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
              >
                {/* Image Section */}
                <img
                  src={exhibit.image.src}
                  alt={exhibit.image.alt}
                  className="w-full md:w-1/2 h-50 md:h-auto object-cover" // Adjusted height for better responsiveness
                />
                {/* Text Section */}
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  {" "}
                  {/* Added flex to position elements */}
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{exhibit.title}</h2>
                    <p className="text-gray-500 mb-2">
                      {exhibit.date} | {exhibit.location}
                    </p>
                    <h3 className="text-red-500 font-semibold mb-2">
                      Description:
                    </h3>
                    <p className="text-gray-700 mb-4">{exhibit.description}</p>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 self-start">
                    {" "}
                    {/* Align button to start */}
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center">
                    <p className="text-lg font-bold text-white transition-all duration-500 ease-in-out">
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
    </div>
  );
};

export default ExhibitPage;
