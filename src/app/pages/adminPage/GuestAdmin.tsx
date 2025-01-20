// File: Guest.jsx

import React from "react";

const GuestAdmin = () => {
    return (
        <div className="bg-[#FAF9F6] text-black min-h-screen p-6">
            {/* Header Section */}
            <div className="text-center mb-12 mt-8">
                <h1 className="text-5xl font-extrabold text-black mb-4">
                    Be a Guest at The Lopenze Art Space
                </h1>
                <p className="text-lg text-[#C62A35] mb-6 max-w-3xl mx-auto">
                    Explore captivating exhibitions, exclusive events, and workshops that celebrate
                    artistic expression.
                </p>
                <h2 className="text-3xl font-semibold mb-2 text-[#C62A35]">
                    Stay Updated
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto">
                    Message us for notifications and stay informed about featured artists,
                    upcoming exhibitions, and special events tailored for art enthusiasts.
                    Never miss a moment of inspiration!
                </p>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-lg max-w-lg mx-auto p-8 border-l-4 border-[#C62A35]">
                <h3 className="text-xl font-semibold text-center mb-6 text-black">
                    Send Us a Message!
                </h3>
                <form className="space-y-4">
                    {/* Name and Contact */}
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="NAME"
                            className="w-full p-3 rounded-md border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-[#C62A35] transition duration-200"
                            required
                        />
                        <input
                            type="text"
                            placeholder="CONTACT NO."
                            className="w-full p-3 rounded-md border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-[#C62A35] transition duration-200"
                            required
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="w-full p-3 rounded-md border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-[#C62A35] transition duration-200"
                        required
                    />


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-400 text-white font-semibold p-3 rounded-md shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GuestAdmin;
