import React, { useState } from "react";

const Guest = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true

        // Simulate sending the message (replace with your actual logic)
        setTimeout(() => {
            // Simulate success or failure (replace with your actual success/failure conditions)
            const success = true; // Change to false for testing error messages
            setIsLoading(false); // Set loading to false
            if (success) {
                setMessageSent(true);
                setErrorMessage("");
            } else {
                setMessageSent(false);
                setErrorMessage("Failed to send message. Please try again later.");
            }
        }, 1500); // Simulate a 1.5-second delay for the API call
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20">
            <div className="text-center mb-12 max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Be a Guest at The Lopenze Art Space
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                    Experience a world of creativity and inspiration at Lopenze Art Gallery.
                    Explore captivating exhibitions, exclusive events, and workshops that
                    celebrate artistic expression.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
                    Stay Updated
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Message us for notifications and stay informed about featured artists,
                    upcoming exhibitions, and special events tailored for art enthusiasts.
                    Never miss a moment of inspiration!
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
                {messageSent && (
                    <div className="bg-green-200 text-green-700 p-4 rounded mb-4">
                        Message sent successfully!
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-200 text-red-700 p-4 rounded mb-4">
                        Error: {errorMessage}
                    </div>
                )}
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                    Send us a message!
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                            required
                        />
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Contact Number"
                            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message (Optional)"
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full resize-y"
                        rows="4"
                    ></textarea>

                    {isLoading ? (
                        <button
                            type="button"
                            disabled
                            className="w-full bg-gray-400 cursor-wait text-white font-semibold py-3 rounded-md"
                        >
                            Sending...
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition"
                        >
                            Send Message
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Guest;