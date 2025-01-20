// File: src/components/Profile.js
import React from "react";
import { ArtisyImage, ArtsData } from "../../config/config";
import { FaInstagram, FaFacebook, FaShareSquare } from "react-icons/fa"; // Import React Icons for Instagram and Facebook
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import ArtCard from "../../components/Cards/ArtCard";

const ViewArtistAdmin = () => {
    const location = useLocation();
    const artistData = location.state?.artistData
        ? JSON.parse(location.state.artistData)
        : null;

    if (!artistData) {
        return <div>Artist not found.</div>;
    }

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
                        <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-8 border-[#C62A35] shadow-xl transform hover:scale-105 transition duration-300">
                            <img
                                src={artistData.src}
                                alt={artistData.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Edit Icon with Circle */}
                        <NavLink to="/artistEditProfile">
                            <div className="flex items-center justify-center">
                                <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition">
                                    <AiOutlineEdit className="h-6 w-6 text-[#C62A35]" />
                                </div>
                            </div>
                        </NavLink>

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
                    <div className="flex flex-col flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-black">
                                {artistData.name}
                            </h1>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert("Link copied to clipboard!");
                                }}
                                className="bg-[#C62A35] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition-shadow duration-300 ease-in-out flex items-center gap-2"
                            >
                                <FaShareSquare className="text-xl" />
                                Share
                            </button>
                        </div>

                        <p className="text-[#C62A35] mt-3 text-lg">{artistData.email}</p>

                        {/* Social Media */}
                        <div className="flex flex-col mt-6">
                            {artistData.instagram && (
                                <a
                                    href={`https://instagram.com/${artistData.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition"
                                >
                                    <FaInstagram className="text-xl" />@{artistData.instagram}
                                </a>
                            )}
                            {artistData.facebook && (
                                <a
                                    href={`https://facebook.com/${artistData.facebook}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition mt-2"
                                >
                                    <FaFacebook className="text-xl" />
                                    {artistData.facebook}
                                </a>
                            )}
                        </div>

                        <div style={{ color: "#C62A35" }} className="font-bold mt-9">
                            Description
                        </div>
                        {/* Description */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="text-gray-800 leading-relaxed font-Montserrat">
                                {artistData.description || "No description available."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Art Section */}
                <section className="mt-14">
                    <h1 className="text-3xl lg:text-2xl font-bold text-left text-black mb-20 mt-20">
                        All Artworks by{" "}
                        <span className="text-[#C62A35]">"{artistData.name}"</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {ArtsData.map((art, index) => (
                            <ArtCard key={index} art={art} />
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <div className="mt-12 text-center border-t pt-6">
                    <p className="text-black">
                        All Artwork by{" "}
                        <span className="font-bold text-[#C62A35]">
                            "{artistData.name}"
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewArtistAdmin;
