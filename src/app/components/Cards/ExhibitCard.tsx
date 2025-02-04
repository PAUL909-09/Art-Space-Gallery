import React, { useState } from "react";
import Button from "../Buttons/button";

interface ExhibitCardProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
  description: string;
  isExpanded: boolean;
  views?: number;
  onViewMore: () => void;
}

const ExhibitCard: React.FC<ExhibitCardProps> = ({
  id,
  src,
  alt,
  title,
  date,
  location,
  description,
  views,
  onViewMore
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform gap-10 duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative h-64">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-300">{date}</p>
          <p className="text-sm text-gray-300">{location}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6">
        <h4 className="text-md font-semibold text-gray-800 mb-2">
          Description:
        </h4>
        <p
          className={`text-sm text-gray-700 leading-relaxed transition-all duration-300 ${
            isExpanded ? "max-h-[500px]" : "max-h-[72px] overflow-hidden"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-center justify-center mt-8">
          <Button onClick={onViewMore} variant="secondary">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExhibitCard;
