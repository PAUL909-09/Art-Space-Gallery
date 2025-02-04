import { ARTIST_PROFILE } from "../../config/config";
import ArtistProfileCard from "../../components/Cards/ArtistProfileCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FeaturedArtist = () => {
  const navigate = useNavigate();
  const visibleArtists = ARTIST_PROFILE;

  // Preload images when component mounts
  useEffect(() => {
    ARTIST_PROFILE.forEach((artist) => {
      const img = new Image();
      img.src = artist.ARTIST_DATA.Profile.src;
    });
  }, []);

  const handleViewArtistProfile = (artist: any) => {
    const artistData = {
      src: artist.ARTIST_DATA.Profile.src, // Pass image src correctly
      alt: artist.ARTIST_DATA.Profile.alt, // Pass image alt correctly
      name: artist.Name,
      artisttype: artist.ArtistType,
      email: artist.Email,
      instagram: artist.Instagram,
      facebook: artist.Facebook,
      description: artist.Description,
      artworks: artist.ARTIST_DATA.ArtWork,
    };

    navigate("/viewArtistProfile", {
      state: { artistData }, // No need to stringify anymore
    });
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="font-Montserrat font-black text-8xl sm:text-6xl lg:text-8xl text-gray-900 animate-[pulse_1.5s_ease-in-out_2] hover:animate-[swing_1s_ease-in-out_2] transition-all duration-700 ease-in-out">
          FEATURED ARTIST
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 mt-10">          {/* Pagination Arrows */}
        {visibleArtists.map((artist, index) => (
          <ArtistProfileCard
            key={index}
            src={artist.ARTIST_DATA.Profile.src}
            alt={artist.ARTIST_DATA.Profile.alt}
            name={artist.Name}
            artisttype={artist.ArtistType}
            email={artist.Email}
            instagram={artist.Instagram}
            facebook={artist.Facebook}
            description={artist.Description}
            onViewProfile={() => handleViewArtistProfile(artist)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtist;
