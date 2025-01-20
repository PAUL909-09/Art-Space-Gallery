// File: ContactUs.jsx

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center py-12 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-black uppercase tracking-wide">
                    Contact Us
                </h1>
            </div>

            {/* Main Card */}
            <div className="bg-white border-2 border-[#C62A35] rounded-xl shadow-lg w-full max-w-5xl p-8 relative">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#C62A35]">Get in touch with us!</h2>
                    <p className="text-black mt-2">
                        We'd love to hear from you! Whether you're an artist, an art enthusiast, or simply curious about what we do, our doors are always open.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Call Us */}
                    <div className="flex items-center space-x-4">
                        <div className="text-[#C62A35] text-4xl">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-black">Call us</p>
                            <p className="text-black">63+ 90909090909</p>
                            <p className="text-black">63+ 90909090909</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <div className="text-[#C62A35] text-4xl">
                            <FaEnvelope />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-black">Email</p>
                            <p className="text-black">lopenze@gmail.com</p>
                        </div>
                    </div>

                    {/* Head Office */}
                    <div className="flex items-center space-x-4">
                        <div className="text-[#C62A35] text-4xl">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-black">Head Office</p>
                            <p className="text-black">Lopez Quezon Province, Philippines.</p>
                        </div>
                    </div>

                    {/* Visit Between */}
                    <div className="flex items-center space-x-4">
                        <div className="text-[#C62A35] text-4xl">
                            <FaClock />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-black">Visit Between</p>
                            <p className="text-black">Mon - Sat: 8:00 A.M - 5:00 P.M.</p>
                            <p className="text-black">Sunday - Close</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#C62A35] my-8"></div>

                {/* Social Media Section */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-black hover:text-[#C62A35] text-bold transition"
                        >
                            <FaFacebook />
                            The Lopenze Art Space
                        </a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-black hover:text-[#C62A35] text-bold transition"
                        >
                            <FaInstagram />
                            @lopenze.ph
                        </a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-black hover:text-[#C62A35] text-boldtransition"
                        >
                            <FaTwitter />
                            @lopenze_artspace
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
