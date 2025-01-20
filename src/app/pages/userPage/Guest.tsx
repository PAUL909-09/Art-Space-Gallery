// File: Guest.jsx

import React from "react";

const Guest = () => {
    return (
        <div className="bg-gray-100 text-black min-h-screen p-6">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    Be a guest at The Lopenze Art Space
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Experience a world of creativity and inspiration at Lopenze Art
                    Gallery. Explore captivating exhibitions, exclusive events, and
                    workshops that celebrate artistic expression.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
                <p className="text-gray-600">
                    Message us for notifications and stay informed about featured artists,
                    upcoming exhibitions, and special events tailored for art enthusiasts.
                    Never miss a moment of inspiration!
                </p>
            </div>

            {/* Form Section */}
            <div className="bg-gray-900 text-white max-w-lg mx-auto p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-center mb-6">
                    Send us a message!
                </h3>
                <form className="space-y-4">
                    {/* Name and Contact */}
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="NAME"
                            className="w-1/2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="CONTACT NO."
                            className="w-1/2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="w-full p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />

                    {/* Message */}
                    <textarea
                        placeholder="MESSAGE (Optional)"
                        className="w-full p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-md transition"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Guest;
