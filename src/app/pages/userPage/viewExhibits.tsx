"use client";

import { useSearchParams } from "next/navigation";
import { ExhibitsData } from "../../config/config";

const ViewExhibit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const exhibit = ExhibitsData[Number(id)];

  if (!exhibit) {
    return <div>Exhibit not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Exhibition Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img
              src={exhibit.image.src}
              alt={exhibit.image.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Details */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-black">{exhibit.title}</h1>

            {/* Date and Location */}
            <div className="flex items-center space-x-2 text-sm">
              <span>{exhibit.date}</span>
              <span>•</span>
              <span>{exhibit.location}</span>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                Description:
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {exhibit.description}
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors mt-8"
            >
              Back to Exhibitions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExhibit;
