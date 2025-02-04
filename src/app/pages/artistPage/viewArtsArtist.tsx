import { useEffect, useMemo, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ARTIST_PROFILE } from "../../config/config";
import { motion } from "framer-motion";
import ArtCardPerArtist from "../../components/Cards/ArtCardPerArtist";

const ArtistProfileCard = lazy(() => import("../../components/Cards/ArtistProfileCard"));

const ViewArtsArtist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const art = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <p className="text-2xl sm:text-3xl font-light text-gray-600">
          No artwork selected
        </p>
      </div>
    );
  }


  // Memoize artist lookup to avoid unnecessary recalculations
  const artist = useMemo(() => 
    ARTIST_PROFILE.find((artist) =>
      artist.ARTIST_DATA.ArtWork.some((artwork) => artwork.title === art.title)
    ), [art.title]
  );



  // const artist = useMemo(() => 
  //   ARTIST_PROFILE.find((Name) =>
  //     artist.ARTIST_DATA.Name.some((Name) => Name.Name === Name.Name)
  //   ), [art.title]
  // );

  const handleViewArtistProfile = () => {
    if (!artist) return;
    const artistData = {
      src: artist.ARTIST_DATA.Profile.src,
      alt: artist.ARTIST_DATA.Profile.alt,
      name: artist.Name,
      artisttype: artist.ArtistType,
      email: artist.Email,
      instagram: artist.Instagram,
      facebook: artist.Facebook,
      description: artist.Description,
      artworks: artist.ARTIST_DATA.ArtWork,
    };

    navigate("/viewArtistProfileArtist", { state: { artistData } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen flex justify-center items-center p-6"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-full h-[500px] overflow-hidden">
              <img
                src={art.image.src}
                alt={art.image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {art.title}
                </h1>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-red-600 font-semibold text-lg">
                    Artist: <span className="text-gray-800">{artist?.Name || "Unknown Artist"}</span>
                  </p>
                  <p className="text-gray-700 text-lg"><span className="font-semibold">Type:</span> {art.type}</p>
                  <p className="text-gray-700 text-lg"><span className="font-semibold">Year:</span> {art.year}</p>
                  <p className="text-gray-700 text-lg"><span className="font-semibold">Dimensions:</span> {art.dimensions}</p>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold">Views:</span>
                    <span className="ml-2">{art.views}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => {
                    navigate(-1);
                    window.scrollTo(0, 0);
                  }}
                  className="w-full sm:w-auto flex-1 py-3 sm:py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
                >
                  Return to Gallery
                </button>
                <button
                  onClick={() => navigate("/contactUs")}
                  className="w-full sm:w-auto flex-1 py-3 sm:py-4 border-2 border-gray-200 text-gray-800 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </div>
          </div>
        </div>
        </div>
      </motion.div>

      {/* {artist && (
        <Suspense fallback={<div className="text-center text-gray-500">Loading artist profile...</div>}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="py-14"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">Meet The Artist</h2>
              <div className="flex justify-center">
                <ArtistProfileCard
                  src={artist.ARTIST_DATA.Profile.src}
                  alt={artist.ARTIST_DATA.Profile.alt}
                  name={artist.Name}
                  email={artist.Email}
                  instagram={artist.Instagram}
                  facebook={artist.Facebook}
                  description={artist.Description}
                  onViewProfile={handleViewArtistProfile}
                  artisttype={artist.ArtistType}
                />
              </div>
            </div>
          </motion.section>
        </Suspense>
      )} */}
       <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {artist && (
        <Suspense fallback={<div className="text-center text-gray-500">Loading artist profile...</div>}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="py-14"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">Meet The Artist</h2>
              <div className="flex justify-center">
                <ArtistProfileCard
                  src={artist.ARTIST_DATA.Profile.src}
                  alt={artist.ARTIST_DATA.Profile.alt}
                  name={artist.Name}
                  email={artist.Email}
                  instagram={artist.Instagram}
                  facebook={artist.Facebook}
                  description={artist.Description}
                  onViewProfile={handleViewArtistProfile}
                  artisttype={artist.ArtistType}
                />
              </div>
            </div>
          </motion.section>
        </Suspense>
      )}
      {artist && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="py-14"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
              Other Artworks by {artist.Name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artist.ARTIST_DATA.ArtWork.map((artwork, index) => (
                artwork.title !== art.title && (
                  <ArtCardPerArtist key={index} art={{ ...artwork, artist: artist.Name }} />
                )
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
    </div>
  );
};

export default ViewArtsArtist;
