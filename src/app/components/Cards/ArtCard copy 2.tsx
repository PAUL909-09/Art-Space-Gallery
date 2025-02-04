import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button";

const ArtCard = ({ art }) => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate("/viewArts", { state: art });
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-80 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto flex flex-col items-center">
            {/* Artwork Image - Larger display */}
            <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                    src={art.image?.src || "fallback-image.jpg"}
                    alt={art.image?.alt || "Artwork"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Artwork Title & Artist */}
            <div className="p-5 text-center flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-gray-800">{art.title}</h2>
                <p className="text-red-600 font-medium mt-1">{art.artist}</p>
            </div>

            {/* Centered Button */}
            <div className="pb-4 flex justify-center w-full">
                <Button variant="secondary" onClick={handleViewMore}>
                    View More
                </Button>
            </div>
        </div>
    );
};

export default ArtCard;
