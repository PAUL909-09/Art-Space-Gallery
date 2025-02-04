
import { ARTIST_PROFILE } from "../../config/config";
import { FaInstagram, FaFacebook, FaShareSquare, FaPlusCircle } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import ArtCardPerArtist from "../../components/Cards/ArtCardPerArtist";

interface ArtistDataType {
  ARTIST_DATA?: {
    ArtWork: any[];
    Profile: { src: string; alt: string };
  };
  Name: string;
  ArtistType: string;
  Email: string;
  Instagram: string;
  Facebook: string;
  Description: string;
}

const ArtistProfile = () => {
  const navigate = useNavigate();
  const artistData: ArtistDataType = ARTIST_PROFILE.find(a => a.Name === "Lhalane Arenque") || {
    Name: "",
    ArtistType: "",
    Email: "",
    Instagram: "",
    Facebook: "",
    Description: "",
    ARTIST_DATA: { ArtWork: [], Profile: { src: "", alt: "" } },
  };

  const artistArtworks = artistData.ARTIST_DATA?.ArtWork || [];

  if (!artistData.Name) {
    return <div className="text-center text-red-500 font-bold">Artist not found.</div>;
  }

  const handleScrollAndNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/addArtArtist");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#C62A35] to-black flex items-center justify-center p-8">
      <div className="bg-[#FAF9F6]/50 backdrop-blur-xl shadow-2xl rounded-3xl p-10 lg:p-16 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-8 border-[#C62A35] shadow-xl transform hover:scale-105 transition duration-300">
              <img
                src={artistData.ARTIST_DATA?.Profile?.src || ""}
                alt={artistData.ARTIST_DATA?.Profile?.alt || "Artist Image"}
                className="w-full h-full object-cover"
              />
            </div>
            <NavLink to="/artistEditProfile" state={{ artist: artistData }}>
              <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
                <AiOutlineEdit className="h-6 w-6 text-[#C62A35]" />
              </div>
            </NavLink>
            <div className="mt-8 flex flex-col justify-center gap-2">
              <button className="bg-[#C62A35] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition">
                {artistData.ArtistType}
              </button>
              <button className="text-[#C62A35] bg-white font-semibold px-8 py-4 rounded-xl border-2 border-[#C62A35] shadow-lg hover:bg-[#C62A35] hover:text-white transition">
                {artistArtworks.length} ARTWORKS
              </button>
            </div>

          </div>
          <div className="flex flex-col flex-1 text-center lg:text-left">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-black">{artistData.Name}</h1>
              <div className="flex gap-4">
                <button className="bg-[#C62A35] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2">
                  <FaShareSquare className="text-lg" />
                  Share
                </button>

              </div>
            </div>
            <p className="text-[#C62A35] mt-3 text-lg">{artistData.Email}</p>
            <div className="flex flex-col mt-6">
              <a href="#" className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition">
                <FaInstagram className="text-xl" />
                {artistData.Instagram}
              </a>
              <a href="#" className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition mt-2">
                <FaFacebook className="text-xl" />
                {artistData.Facebook}
              </a>
            </div>
            <div className="font-bold mt-9 text-[#C62A35]">Description</div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-800 leading-relaxed font-Montserrat">{artistData.Description}</p>
            </div>
          </div>
        </div>

        {/* Artworks Section */}
        <section className="mt-14">
          <h1 className="text-3xl lg:text-xl font-bold text-left text-black mb-8">
            All Artworks by <span className="text-[#C62A35]">"{artistData.Name}"</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-auto">
            {artistArtworks.map((art, index) => (
              <ArtCardPerArtist key={index} art={{ ...art, artist: artistData.Name }} />
            ))}
          </div>
        </section>

        {/* Add Art Section */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleScrollAndNavigate} // Call the function here
            className="flex items-center gap-3 bg-[#C62A35 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition text-lg"
          >
            <FaPlusCircle className="text-2xl" /> Add New Artwork
          </button>
        </div>
       

        {/* Footer Section */}
        <div className="mt-12 text-center border-t pt-6">
          <p>All Artwork by <span className="font-bold text-[#C62A35]">"{artistData.Name}"</span></p>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
