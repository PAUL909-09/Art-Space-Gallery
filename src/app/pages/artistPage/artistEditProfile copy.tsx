import { useNavigate } from "react-router-dom";
import { Icons } from "../../config/config";

const ArtistEditProfile = () => {
    const navigate = useNavigate(); // Correct hook for navigation

    return (
        <div>
            <section
                className="min-h-screen bg-black font-Montserrat"
                style={{ backgroundColor: "#201D1E" }}
            >
                <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl text-white font-extrabold mb-12">
                        EDIT PROFILE
                    </h1>

                    <div className="w-full max-w-6xl  rounded-lg p-8">
                        <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
                            {/* Profile Image Section */}
                            <div
                                className="w-[300px] h-[300px] bg-white flex items-center justify-center rounded-lg cursor-pointer"
                                onClick={() => document.getElementById("fileInput")?.click()}
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-md outline outline-2 outline-black">
                                    <img
                                        src={Icons[0]?.src || "default-icon.png"} // Fallback if Icons is empty
                                        alt={Icons[0]?.alt || "default-icon"}
                                        className="h-12 w-12 rounded-md"
                                    />
                                </div>
                            </div>
                            <input type="file" id="fileInput" className="hidden" />

                            {/* Form Section */}
                            <div className="flex-1">
                                <form className="space-y-6">
                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="name"
                                        >
                                            NAME
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter the name"
                                            className="w-full p-3 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="email"
                                        >
                                            EMAIL
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter the email"
                                            className="w-full p-3 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="contact"
                                        >
                                            CONTACT NO.
                                        </label>
                                        <input
                                            type="text"
                                            id="contact"
                                            placeholder="Enter contact number"
                                            className="w-full p-3 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="social"
                                        >
                                            SOCIAL MEDIA
                                        </label>
                                        <input
                                            type="text"
                                            id="social"
                                            placeholder="Enter social media"
                                            className="w-full p-3 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="art-style"
                                        >
                                            ART STYLE
                                        </label>
                                        <input
                                            type="text"
                                            id="art-style"
                                            placeholder="Enter art style"
                                            className="w-full p-3 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm text-gray-400 font-semibold mb-2"
                                            htmlFor="description"
                                        >
                                            DESCRIPTION
                                        </label>
                                        <textarea
                                            id="description"
                                            placeholder="Enter description"
                                            className="w-full p-3 h-48 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500 resize-none"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-bold transition-colors"
                            >
                                ADD
                            </button>
                            <button
                                type="button"
                                className="border border-white hover:bg-gray-600 text-white py-3 px-8 rounded-md font-bold transition-colors"
                            >
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtistEditProfile;
