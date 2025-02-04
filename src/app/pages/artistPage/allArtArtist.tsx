import { APP_COLORS, ARTIST_PROFILE, allImages } from "../../config/config";
import { useNavigate } from "react-router-dom";
import ArtCard from "../../components/Cards/ArtCard";

const AllArtArtist = () => {
  const navigate = useNavigate();

  // const handleViewMore = (art: any) => {
  //   navigate("/viewArtsArtist", { state: art });
  //   window.scrollTo(0, 0);
  // };

  // const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
  //   artist.ARTIST_DATA.ArtWork.map((art) => ({
  //     ...art,
  //     artist: artist.Name,
  //   }))
  // );

  const   handleViewArtistProfile = (artist: any) => {
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

  const handleViewMore = (art: any) => {
    navigate("/viewArtsArtist", { state: art });
    window.scrollTo(0, 0);
  };

  const allArtworks = ARTIST_PROFILE.flatMap((artist) =>
    artist.ARTIST_DATA.ArtWork.map((art) => ({
      ...art,
      artist: artist.Name, // Add artist name to each artwork
    }))
  );
  return (
    <div>
      <section
        className="relative p-8"
        style={{ backgroundColor: APP_COLORS.primary }}
      >
        <h1
          className="text-6xl font-extrabold text-center mb-10"
          style={{ color: APP_COLORS.secondary }}
        >
          ALL ARTS
        </h1>
        <div className="relative w-full h-full flex flex-wrap justify-center items-center">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden group transition-all duration-500 ease-in-out m-4" // Added m-4 for margin
            >
              <div
                className={`transform 
                    group-hover:scale-110 transition-all duration-500`} // Removed rotate and translate
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-[200px] h-[200px] rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-5">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          ARTS
        </h1>
        <h1 className="text-7xl font-extrabold text-center mb-12 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#C62A35]">
            ARTS
          </span>
          <div className="relative mt-4 flex justify-center items-center">
            <div className="w-24 h-1 bg-gradient-to-r from-black to-[#C62A35] rounded"></div>
          </div>
        </h1>

        {/* Display artworks dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allArtworks.map((art, index) => (
            <ArtCard key={index} art={art} onViewMore={() => handleViewMore(art)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllArtArtist;