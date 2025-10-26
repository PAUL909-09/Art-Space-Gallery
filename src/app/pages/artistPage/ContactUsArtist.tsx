import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const ContactUsArtist = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 px-6">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 uppercase tracking-wide">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    We’d love to hear from you! Reach out to us using the details below.
                </p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white border-2 border-[#C62A35] rounded-xl shadow-lg w-full max-w-5xl p-10">
                
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#C62A35]">Get in touch with us!</h2>
                    <p className="text-gray-700 mt-2">
                        Whether you're an artist, an art enthusiast, or just curious, our doors are open.
                    </p>
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Item */}
                    {[
                        { icon: <FaPhoneAlt />, title: "Call us", info: ["63+ 90909090909", "63+ 90909090909"] },
                        { icon: <FaEnvelope />, title: "Email", info: ["lopenze@gmail.com"] },
                        { icon: <FaMapMarkerAlt />, title: "Head Office", info: ["Lopez Quezon Province, Philippines."] },
                        { icon: <FaClock />, title: "Visit Between", info: ["Mon - Sat: 8:00 A.M - 5:00 P.M.", "Sunday - Closed"] },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-6 p-4 bg-gray-50 rounded-lg shadow-sm">
                            <div className="text-[#C62A35] text-3xl p-4 bg-gray-200 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                                {item.info.map((line, i) => (
                                    <p key={i} className="text-gray-700">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-[#C62A35] my-10"></div>

                {/* Social Media Section */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow us on Social Media</h3>
                    <div className="flex justify-center space-x-8">
                        {[
                            { icon: <FaFacebook />, text: "The Lopenze Art Space", link: "#" },
                            { icon: <FaInstagram />, text: "@lopenze.ph", link: "#" },
                            { icon: <FaTwitter />, text: "@lopenze_artspace", link: "#" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                className="flex items-center space-x-3 text-gray-900 hover:text-[#C62A35] transition duration-300"
                            >
                                <span className="text-2xl">{social.icon}</span>
                                <span className="text-lg font-medium">{social.text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsArtist;
