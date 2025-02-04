import { useState } from "react";
import { Star, ImageIcon } from "lucide-react";

const SendFeedback = () => {
    const [rating, setRating] = useState(0);
    const [anonymous, setAnonymous] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-[90%] max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-2">SEND FEEDBACK</h1>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Your voice matters! Kindly share your feedback and{' '}
                    <span className="text-red-600 font-semibold">become part of our growing art community.</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Profile Upload */}
                    <div className="border border-gray-300 rounded-lg p-6 flex items-center justify-center flex-col">
                        <ImageIcon size={48} className="text-gray-400" />
                        <p className="text-sm font-semibold mt-2 text-red-600">ADD PROFILE (Optional)</p>
                    </div>

                    <div>
                        {/* Rating */}
                        <div className="flex items-center justify-between">
                            <p className="text-red-600 font-semibold">RATE US!</p>
                            <label className="flex items-center gap-2 text-red-600 font-semibold">
                                Stay anonymous
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    checked={anonymous}
                                    onChange={() => setAnonymous(!anonymous)}
                                />
                            </label>
                        </div>
                        <div className="flex gap-1 my-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={24}
                                    className={rating >= star ? "text-yellow-500" : "text-gray-300"}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>

                        {/* Name Input */}
                        <p className="text-red-600 font-semibold mt-4">NAME (Optional)</p>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Enter your name"
                            disabled={anonymous}
                        />

                        {/* Comment Box */}
                        <p className="text-red-600 font-semibold mt-4">INSERT COMMENT</p>
                        <textarea
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            placeholder="Write your feedback here..." 
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button className="bg-black text-white px-8 py-2 text-lg rounded-lg">ADD</button>
                    <button className="bg-white border border-black text-black px-8 py-2 text-lg rounded-lg">
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendFeedback;
