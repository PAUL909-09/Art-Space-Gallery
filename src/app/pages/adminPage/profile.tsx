// File: src/components/Profile.js
import React from "react";
import { ArtisyImage, ArtsData } from "../../config/config";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#C62A35] to-black flex items-center justify-center p-6">
      <div className="bg-[#FAF9F6] w-full max-w-7xl rounded-3xl shadow-2xl p-10 lg:p-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#C62A35] rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
          {/* Profile Image */}
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-8 border-[#C62A35] shadow-xl transform hover:scale-105 transition duration-300">
            <img
              src={ArtisyImage[4].src}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Information */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-black">
              Alma Lopez
            </h1>
            <p className="text-[#C62A35] mt-3 text-lg">almalopez@email.com</p>
            <p className="text-[#C62A35] text-lg">000-000-0000</p>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start items-center gap-6 mt-6">
              <a
                href="#"
                className="text-[#C62A35] font-medium hover:text-black transition"
              >
                @almalopez.ig
              </a>
              <a
                href="#"
                className="text-[#C62A35] font-medium hover:text-black transition"
              >
                Facebook
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <button className="bg-gradient-to-r from-[#C62A35] to-black text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition">
                PAINTER
              </button>
              <button className="text-[#C62A35] bg-white font-semibold px-8 py-4 rounded-full border-2 border-[#C62A35] shadow-lg hover:bg-[#C62A35] hover:text-white transition">
                9 ARTWORKS
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            About Alma
          </h2>
          <p className="text-black leading-relaxed">
            I am Alma Lopez, a contemporary painter whose art is a celebration
            of culture, identity, and empowerment. My work blends traditional
            elements with modern techniques to evoke emotions and tell powerful
            stories. Through vibrant colors and symbolic imagery, I aim to
            inspire others to embrace their unique voices and challenge
            conventions.
          </p>
        </div>

        {/* Art Section */}
        <section className="mt-14">
          <h1 className="text-3xl lg:text-4xl font-bold text-center text-black mb-10">
            Featured Artworks
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
                  <button className="mt-6 w-full bg-gradient-to-r from-[#C62A35] to-black text-white py-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
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
