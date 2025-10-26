import { useNavigate } from "react-router-dom";
import { ARTIST_PROFILE } from "../../config/config";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const AddExhibit = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedArtworks, setSelectedArtworks] = useState<
    { artist: string; title: string; imageSrc: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Exhibit Added Successfully!");
      navigate(-1);
      setIsModalOpen(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const artistName = e.target.value;
    if (artistName && !selectedArtists.includes(artistName)) {
      setSelectedArtists([...selectedArtists, artistName]);
    }
  };

  const handleArtworkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    artist: string,
    art: { title: string; image: { src: string; alt: string } }
  ) => {
    setSelectedArtworks((prev) => {
      const updatedArtworks = [...prev];
      if (e.target.checked) {
        updatedArtworks.push({
          artist,
          title: art.title,
          imageSrc: art.image.src,
        });
      } else {
        return updatedArtworks.filter(
          (a) => !(a.artist === artist && a.title === art.title)
        );
      }
      return updatedArtworks;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E66465] via-[#C62A35] to-[#A3212A] flex flex-col items-center p-12">
      <div className="bg-white/60 rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-[#C62A35] mb-6">
          Add Exhibition
        </h1>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl">
            <div className="animate-spin h-10 w-10 border-t-4 border-red-700 border-solid rounded-full"></div>
          </div>
        )}

        {/* Exhibit Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-gray-400"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Exhibit Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p className="text-gray-500">Click to upload cover image</p>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter the name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter the location"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          {/* Submit Button Inside Form */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Exhibit"}
            </button>
          </div>
        </form>
      </div>

      {/* Artist & Art Selection Section */}
      <div className="bg-white/80 rounded-2xl shadow-lg p-6 mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-[#C62A35] mb-4">
          Select Artists & Artworks
        </h2>

        <label className="block mb-2">Choose an Artist</label>
        <select
          value=""
          onChange={handleArtistChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        >
          <option value="">Select an artist</option>
          {ARTIST_PROFILE.map((artist) => (
            <option key={artist.Name} value={artist.Name}>
              {artist.Name}
            </option>
          ))}
        </select>

        {selectedArtists.map((artist) => (
          <div key={artist} className="mt-4">
            <h2 className="text-lg font-semibold">{artist}</h2>
            {ARTIST_PROFILE.find(
              (a) => a.Name === artist
            )?.ARTIST_DATA.ArtWork.map((art) => (
              <div key={art.title} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={art.title}
                  value={art.title}
                  onChange={(e) => handleArtworkChange(e, artist, art)}
                  checked={selectedArtworks.some(
                    (a) => a.artist === artist && a.title === art.title
                  )}
                />
                <label htmlFor={art.title} className="ml-2">
                  {art.title}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Selected Artworks Display */}
      <div className="bg-black/30 p-8 rounded-md mt-8 w-full max-w-6xl h-[400px] overflow-y-auto">
        <h2 className="text-xl font-bold text-white">Selected Artworks</h2>
        {selectedArtworks.length === 0 ? (
          <p className="text-gray-200">No artworks selected.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6 mt-4">
            {selectedArtworks.map((art) => (
              <div
                key={`${art.artist}-${art.title}`}
                className="bg-white rounded-lg p-4 shadow-md"
              >
                <img
                  src={art.imageSrc}
                  alt={art.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-gray-800 text-sm text-center font-semibold">
                  {art.title}
                </p>
                <p className="text-gray-500 text-xs text-center">
                  by {art.artist}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Add Exhibit"
        message="Are you sure you want to add this exhibit?"
        confirmButtonText="Add Exhibit"
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default AddExhibit;