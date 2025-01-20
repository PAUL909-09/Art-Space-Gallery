import { ArtisyImage } from "../../config/config";
import Button from "../../components/Buttons/button";
import ArtistProfileCard from "../../components/Cards/ArtistProfileCard";

const FeaturedArtist = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="font-Montserrat font-black text-8xl sm:text-6xl lg:text-8xl text-gray-900 animate-[pulse_1.5s_ease-in-out_2] hover:animate-[swing_1s_ease-in-out_2] transition-all duration-700 ease-in-out">
          FEATURED ARTIST
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 mt-10">
        {ArtisyImage.map((artist, index) => (
          <ArtistProfileCard
            key={index}
            src={artist.src}
            alt={artist.Alt}
            name={artist.Name}
            email={artist.Email}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtist;
