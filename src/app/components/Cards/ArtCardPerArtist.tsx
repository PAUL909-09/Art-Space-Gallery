import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button";

interface Art {
  title: string;
  year?: number;
  type: string;
  dimensions?: string;
  views?: number;
  image: {
    src: string;
    alt: string;
  };
  artist: string;
}

interface ArtCardPerArtistProps {
  art: Art;
}

const ArtCardPerArtist: React.FC<ArtCardPerArtistProps> = ({ art }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/viewArts", { state: art });
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] w-80 sm:w-96 h-[470px] mx-auto flex flex-col group">
      {/* Image Container */}
      <div className="relative group w-full h-full overflow-hidden">
        <img
          src={art.image.src}
          alt={art.image.alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Hover Effect - Title, Artist, and Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center text-center p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700">
            {art.title}
          </h2>
          <p className="text-lg text-white mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700 delay-100">
            by {art.artist}
          </p>
          <Button
            variant="secondary"
            onClick={handleViewMore}
            className="mt-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-700 delay-200"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtCardPerArtist;
