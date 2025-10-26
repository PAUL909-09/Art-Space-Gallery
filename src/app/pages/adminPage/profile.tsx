// File: src/components/Profile.js
import { ArtisyImage, ArtsData } from "../../config/config";
import { FaInstagram, FaFacebook, FaShareSquare } from "react-icons/fa"; // Import React Icons for Instagram and Facebook

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#C62A35] to-black flex items-center justify-center p-12">
      <div className="bg-[#FAF9F6] w-full max-w-7xl rounded-3xl shadow-2xl p-10 lg:p-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#C62A35] rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-8 border-[#C62A35] shadow-xl transform hover:scale-105 transition duration-300">
              <img
                src={ArtisyImage[4].src}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Buttons Below the Image */}
            <div className="mt-8 flex flex-col justify-center gap-2">
              <button className="bg-[#C62A35] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition">
                PAINTER
              </button>
              <button className="text-[#C62A35] bg-white font-semibold px-8 py-4 rounded-xl border-2 border-[#C62A35] shadow-lg hover:bg-[#C62A35] hover:text-white transition">
                9 ARTWORKS
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex flex-col  flex-1 text-center lg:text-left">
            {/* Name */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-black">
                Alma Lopez
              </h1>
              <button className="bg-[#C62A35] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition-shadow duration-300 ease-in-out flex items-center gap-2">
                <FaShareSquare className="text-xl" />
                Share
              </button>
            </div>

            {/* Email */}
            <p className="text-[#C62A35] mt-3 text-lg">almalopez@email.com</p>

            {/* Social Media */}
            <div className="flex flex-col mt-6">
              <a
                href="#"
                className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition"
              >
                {/* React Icon for Instagram */}
                <FaInstagram className="text-xl" />
                @almalopez.ig
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition mt-2"
              >
                {/* React Icon for Facebook */}
                <FaFacebook className="text-xl" />
                Alma Lopez
              </a>
            </div>

            <div style={{ color: "#C62A35" }} className="font-bold mt-9">
              Description
            </div>
            {/* Description */}
            <div className=" bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-800 leading-relaxed font-Montserrat">
                I am Alma Lopez, a contemporary painter whose art is a
                celebration of culture, identity, and empowerment. My work is
                deeply inspired by my heritage, blending traditional elements
                with modern techniques to create pieces that tell stories and
                evoke emotions. Through my art, I aim to inspire others to
                embrace their unique voices.
              </p>
            </div>
          </div>
        </div>

        {/* Art Section */}
        <section className="mt-14">
          <h1 className="text-3xl lg:text-2xl font-bold text-left text-black mb-20 mt-20">
            All Artworks by <span className="text-[#C62A35]">"Alma Lopez"</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ArtsData.map((art, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group"
              >
                <img
                  src={art.image.src}
                  alt={art.image.alt}
                  className="w-full h-56 object-cover hover:opacity-90 transition"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-black">
                    {art.title}
                  </h2>
                  <p className="text-[#C62A35] font-medium mt-2">
                    Artist: {art.artist}
                  </p>
                  <p className="text-[#C62A35] font-medium">Type: {art.type}</p>
                  <p className="text-black text-sm mt-4 leading-relaxed">
                    {art.description}
                  </p>
                  <button className="mt-6 w-full bg-gradient-to-r from-[#C62A35] to-red-800 text-white py-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
                    View More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 text-center border-t pt-6">
          <p className="text-black">
            All Artwork by{" "}
            <span className="font-bold text-[#C62A35]">“Alma Lopez”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
