import React from "react";

interface ArtistProfileCardProps {
    src: string; // Image source
    alt: string; // Image alt text
    name: string; // Artist name
    email: string; // Artist email
}

const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({ src, alt, name, email }) => {
    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105 p-6 text-center max-w-sm mx-auto group"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-700 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

            {/* Profile Image with Hover Effect */}
            <div className="relative">
                <img
                    src={src}
                    alt={alt}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6"
                />
            </div>

            {/* Artist Name */}
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                {name}
            </h3>

            {/* Artist Email */}
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {email}
            </p>

            {/* Contact Button with Ripple Effect */}
            <div className="font-Montserrat mt-5">
                <button
                    className="relative overflow-hidden px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-transform duration-500 transform hover:scale-105"
                >
                    <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></span>
                    <span className="relative">Contact Artist</span>
                </button>
            </div>
        </div>
    );
};

export default ArtistProfileCard;
