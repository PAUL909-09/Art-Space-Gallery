import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";

// Define interfaces for type safety
interface Artwork {
  title: string;
  type?: string;
  image: { src: string; alt: string };
}

interface ArtistDataType {
  ARTIST_DATA?: {
    ArtWork: Artwork[];
    Profile: { src: string; alt: string };
  };
  Name: string;
  ArtistType: string;
  Email: string;
  Instagram: string;
  Facebook: string;
  Description: string;
  Contact?: string; // Added to match formData
}

interface FormData {
  name: string;
  email: string;
  contact: string;
  social: string;
  artStyle: string;
  description: string;
}

const ArtistEditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const artistData: ArtistDataType = location.state?.artist || {};
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    social: "",
    artStyle: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState<string>(
    artistData.ARTIST_DATA?.Profile?.src || "/default-avatar.png"
  );
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (artistData) {
      setFormData({
        name: artistData.Name || "",
        email: artistData.Email || "",
        contact: artistData.Contact || "",
        social: artistData.Instagram || "",
        artStyle: artistData.ArtistType || "",
        description: artistData.Description || "",
      });
      setSelectedImage(artistData.ARTIST_DATA?.Profile?.src || "/default-avatar.png");
    }
  }, [artistData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setLoading(true);
    // Simulate a save (replace with actual logic for a real backend)
    setTimeout(() => {
      setLoading(false);
      alert("Profile updated successfully!");
      navigate(-1);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#C62A35] to-[#d35a47] p-6">
      <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-md mb-6">
          Edit Profile
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="relative group">
            <div
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${selectedImage})` }}
              onClick={() => document.getElementById("fileInput")?.click()}
            ></div>
            <button
              onClick={() => document.getElementById("fileInput")?.click()}
              className="absolute bottom-2 right-2 bg-[#C62A35] text-white p-2 rounded-full text-sm shadow-md transition hover:bg-red-700"
            >
              Change
            </button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-white bg-white/20 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your name"
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-white bg-white/20 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your email"
            />
            <input
              type="text"
              id="social"
              value={formData.social}
              onChange={handleChange}
              className="w-full p-3 text-white bg-white/20 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter social media"
            />
            <input
              type="text"
              id="artStyle"
              value={formData.artStyle}
              onChange={handleChange}
              className="w-full p-3 text-white bg-white/20 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter art style"
            />
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 h-32 text-white bg-white/20 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              placeholder="Enter description"
            ></textarea>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                type="submit"
                className="bg-[#C62A35] hover:bg-red-700 text-white py-3 px-8 rounded-lg font-bold transition-colors shadow-md"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="border border-white text-white hover:bg-white/20 py-3 px-8 rounded-lg font-bold transition-colors"
              >
                Cancel
              </button>
            </div>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Confirm Profile Update"
              message="Are you sure you want to update your account?"
              confirmButtonText="Confirm Update"
              onConfirm={handleModalConfirm}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistEditProfile;