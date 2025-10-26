import { useState, useEffect, useRef } from "react";
import Button from "../Buttons/button";

// Define a proper interface for the 'art' object
interface Art {
  title: string;
  artist: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface ArtCardProps {
  art: Art;
  onViewMore?: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ art, onViewMore }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    const handleLoad = () => setIsLoaded(true);

    if (img && img.complete) {
      handleLoad();
    } else if (img) {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      className="w-80 max-w-xs h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center cursor-pointer relative"
    >
      <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
        <img
          ref={imageRef}
          src={art.image?.src || "fallback-image.jpg"}
          alt={art.image?.alt || "Artwork"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full animate-spin border-4 border-t-blue-500" />
          </div>
        )}
        <div
          className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-50 transition-opacity duration-300 blur-2xl"
        ></div>
      </div>

      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 truncate mb-2" title={art.title}>
          {art.title}
        </h2>
        <p className="text-red-600 font-medium text-sm mb-4 truncate" title={art.artist}>{art.artist}</p>

        {onViewMore && (
          <Button variant="secondary" onClick={onViewMore} className="mb-2">
            View More
          </Button>
        )}
      </div>
    </div>
  );
};

export default ArtCard;
