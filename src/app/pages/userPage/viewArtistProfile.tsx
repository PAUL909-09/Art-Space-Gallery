import { motion } from "framer-motion";
import { ARTIST_PROFILE } from "../../config/config";
import {
    FaInstagram,
    FaFacebook,
    FaShareSquare,
    FaVolumeUp,
    FaVolumeOff,
    FaArrowLeft,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ArtCardPerArtist from "../../components/Cards/ArtCardPerArtist";
import { useState } from "react";

// Define a proper interface for artworks (based on how it's used in the code and ArtCardPerArtist)
interface Artwork {
    title: string;
    image?: {
        src: string;
        alt: string;
    };
    // Add other properties if needed (e.g., description, date) based on your data structure
}

interface ArtistData {
    name: string;
    artisttype: string;
    email: string;
    instagram?: string;
    facebook?: string;
    description?: string;
    artworks: Artwork[];  // Replaced 'any[]' with proper type
    src: string;
    alt: string;
}
    
const ViewArtistProfile = () => {
    const [isSpeechOn, setIsSpeechOn] = useState(true);
    // Removed speechInstance state as it's unused (see notes below)
    const location = useLocation();
    const navigate = useNavigate();
    // const artistData = location.state?.artistData
    //     ? JSON.parse(location.state.artistData)
    //     : null;
    const artistData: ArtistData | null = location.state?.artistData || null;

    if (!artistData) {
        return <div>Artist not found.</div>;
    }

    // Function to Read Description Aloud
    const toggleSpeech = () => {
        if (!isSpeechOn) {
            if ("speechSynthesis" in window) {
                const speech = new SpeechSynthesisUtterance(
                    artistData.description || "No description available."
                );
                speech.lang = "en-US";
                speech.rate = 1;
                window.speechSynthesis.speak(speech);
                // Removed setSpeechInstance(speech) as speechInstance is no longer used
            } else {
                alert("Sorry, your browser does not support text-to-speech.");
            }
        } else {
            window.speechSynthesis.cancel(); // Stop speech if it’s playing (removed duplicate call)
        }
        setIsSpeechOn(!isSpeechOn);
    };

    const artistArtworks =
        ARTIST_PROFILE.find((artist) => artist.Name === artistData.name)
            ?.ARTIST_DATA.ArtWork || [];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#C62A35] to-black flex items-center justify-center p-12"
        >
            <div className="bg-[#FAF9F6]/50 backdrop-blur-xl w-full max-w-7xl rounded-3xl shadow-2xl p-10 lg:p-16 relative">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 bg-[#C62A35] text-white p-2 rounded-full shadow-lg hover:opacity-90 transition"
                >
                    <FaArrowLeft className="text-xl" />
                </motion.button>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-8 border-[#C62A35] shadow-xl transform hover:scale-105 transition duration-300">
                            <img
                                // src={artistData.src}
                                // alt={artistData.alt}
                                src={artistData.src} // Access src correctly
                                alt={artistData.alt} // Access alt correctly    
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#C62A35] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
                            >
                                PAINTER
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-[#C62A35] bg-white font-semibold px-8 py-4 rounded-xl border-2 border-[#C62A35] shadow-lg hover:bg-[#C62A35] hover:text-white transition"
                            >
                                {artistArtworks.length} ARTWORKS
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="flex flex-col flex-1 text-center lg:text-left"
                    >
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
                                    className="flex items-center gap-2 text-[#C62A35] font-medium hover:text-black transition mt-2"  // Fixed missing closing ]
                                >
                                    <FaFacebook className="text-xl" />
                                    {artistData.facebook}
                                </a>
                            )}
                        </div>

                        <div className="flex items-center gap-3 mt-9 mb-5">
                            <div style={{ color: "#C62A35" }} className="font-bold">
                                Description
                            </div>
                            <button
                                onClick={toggleSpeech}
                                className="text-[#C62A35] bg-white p-2 rounded-full shadow-md hover:bg-[#C62A35] hover:text-white transition"
                            >
                                {isSpeechOn ? (
                                    <FaVolumeUp className="text-xl" />
                                ) : (
                                    <FaVolumeOff className="text-xl" />
                                )}
                            </button>
                        </div>

                        <motion.div className="bg-gray-50 p-6 rounded-lg shadow">
                            <p className="text-gray-800 leading-relaxed font-Montserrat">
                                {artistData.description || "No description available."}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-14"
                >
                    <h1 className="flex justify-center pt-14 text-3xl lg:text-2xl font-bold text-left text-black mb-20 mt-20">
                        All Artworks by{" "}
                        <span className="text-[#C62A35]">"{artistData.name}"</span>  {/* Fixed missing closing ] */}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {artistArtworks.map((art, index) => (
                            <ArtCardPerArtist
                                key={index}
                                art={{ ...art, artist: artistData.name }}
                            />
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default ViewArtistProfile;