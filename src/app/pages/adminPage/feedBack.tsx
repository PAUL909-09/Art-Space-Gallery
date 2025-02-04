import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import default_image_profile from "../../../assets/default_image_profile 1.png"
import { APP_ROUTES } from "../../config/config";
import { NavLink, useNavigate } from "react-router-dom";

// Enhanced Feedback Data
const feedBack = [
    {
        name: "Mike Roberts",
        image: default_image_profile,
        rating: 4,
        text: "Lopenze is an immersive journey into the minds of talented artists. The sculptures and installations in the latest exhibit were phenomenal.",
    },
    {
        name: "Isabella R.",
        image: default_image_profile,
        rating: 5,
        text: "Each exhibit tells a unique story, and the lighting and layout enhance the experience. It feels like stepping into a masterpiece!",
    },
    {
        name: "David Wilson",
        image: default_image_profile,
        rating: 5,
        text: "The interactive art section blew my mind! It's incredible to be part of an exhibition that embraces technology and human creativity.",
    },
    {
        name: "Sarah L.",
        image: default_image_profile,
        rating: 4,
        text: "The 'Ethereal Visions' showcase was stunning! The details, brushstrokes, and depth in each painting made me appreciate art on a whole new level.",
    },
    {
        name: "Jonathan T.",
        image: default_image_profile,
        rating: 3,
        text: "While I loved the atmosphere, I felt some modern pieces lacked depth. Nonetheless, a wonderful experience overall.",
    },
    {
        name: "Anonymous",
        image: default_image_profile,
        rating: 4,
        text: "A hidden gem! The curation is outstanding, and I discovered artists I would have never come across otherwise. Highly recommend!",
    },
];

// Custom Card Component
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/10 ${className}`}
    >
        {children}
    </motion.div>
);

// Custom Button Component
const Button = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <button onClick={onClick} className={`px-6 py-3 rounded-full font-bold transition ${className}`}>
        {children}
    </button>
);

export default function FeedBackComponent() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % feedBack.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => setIndex((prev) => (prev === 0 ? feedBack.length - 1 : prev - 1));
    const handleNext = () => setIndex((prev) => (prev + 1) % feedBack.length);

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center py-12">
            <h2 className="text-4xl font-extrabold mb-4 text-center underline decoration-red-500">
                What Our Clients Say
            </h2>
            <p className="text-center max-w-2xl mb-6 text-gray-300">
                Your feedback brings art to life—admiration, inspiration, or fresh perspectives.
                <br />
                <span className="text-red-500 font-bold">Join the conversation</span> and be part of our
                <span className="text-red-500 font-bold"> creative community</span> today!
            </p>

            {/* Feedback Cards */}
            <div className="relative flex items-center w-full max-w-3xl">
                <button onClick={handlePrev} className="absolute left-0 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition">
                    <ChevronLeft size={30} className="text-black" />
                </button>

                <div className="flex w-full justify-center">
                    <Card className="w-[90%] md:w-[75%] text-center">
                        <motion.div key={index} className="flex flex-col items-center">
                            <img src={feedBack[index].image} alt={feedBack[index].name} className="w-16 h-16 rounded-full mb-3 border-2 border-red-500 shadow-md" />
                            <p className="font-bold text-red-500 text-lg">{feedBack[index].name}</p>
                            <div className="flex my-2">
                                {[...Array(5)].map((_, star) => (
                                    <span key={star} className={star < feedBack[index].rating ? "text-yellow-400" : "text-gray-400"}>★</span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-200">"{feedBack[index].text}"</p>
                        </motion.div>
                    </Card>
                </div>

                <button onClick={handleNext} className="absolute right-0 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition">
                    <ChevronRight size={30} className="text-black" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex gap-2">
                {feedBack.map((_, i) => (
                    <motion.span
                        key={i}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index ? "bg-red-500 scale-125 shadow-lg" : "bg-gray-400"}`}
                    />
                ))}
            </div>

            {/* Feedback Button */}
            <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3"
                onClick={() => {
                    const route = APP_ROUTES.ADMIN.find(
                        (route) => route.path === "/sendFeedBack"
                    );
                    if (route) navigate(route.path); // Safe navigation
                }}>
                Send Feedback
            </Button>

            <p className="text-center text-sm mt-4 max-w-xl text-gray-300">
                We'd love to hear your thoughts about our latest exhibitions and artworks! Your feedback helps us create even more immersive art experiences.
            </p>

            {/* Scroll-to-Top Button */}
            {/* <button className="fixed bottom-6 right-6 bg-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
        <ArrowUp size={24} className="text-white" />
      </button> */}
        </section>
    );
}
