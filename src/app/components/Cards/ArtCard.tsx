import React from "react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button";

const ArtCard = ({ art }) => {
    const navigate = useNavigate();

    const handleViewMore = (art: {
        title: string;
        artist: string;
        type: string;
        description: string;
        image: { src: string; alt: string };
    }) => {
        navigate("/viewArts", { state: art });
        window.scrollTo(0, 0); // scroll to the top of the page
    };
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
                src={art.image.src}
                alt={art.image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{art.title}</h2>
                <p className="text-red-600 font-medium mt-2">Artist: {art.artist}</p>
                <p className="text-red-600 font-medium">Type: {art.type}</p>
                <p className="text-gray-700 text-sm mt-4">
                    <span className="font-bold text-red-600">Description:</span>{" "}
                    {art.description}
                </p>


            </div>
            <div className="flex items-center justify-end mt-4 mr-4">
                {/* Views Button */}
                <button
                    className="flex justify-end bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
                    onClick={() => alert(`Views for ${art.title}: ${art.views}`)}
                >
                    <FiEye className="w-5 h-5 mr-2" />
                    <span>{art.views}</span>
                </button>
            </div>
            {/* View More Button Positioned at the Right */}
            <div className="p-4 bg-white flex justify-center">
                <Button
                    variant="secondary"
                    onClick={() => handleViewMore(art)}
                >
                    View More
                </Button>
            </div>
        </div>
    );
};

export default ArtCard;
