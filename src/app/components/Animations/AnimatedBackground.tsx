import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
    src: string;
    alt: string;
    animationType?: "fade" | "zoom" | "slide";
    className?: string;
}

const backgroundVariants = {
    fade: { opacity: [0, 1] },
    zoom: { scale: [1.2, 1] },
    slide: { x: [-100, 0] },
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
    src,
    alt,
    animationType = "fade",
    className = "",
}) => {
    return (
        <motion.div
            className={`relative w-full h-screen ${className}`}
            initial={{ opacity: 0 }} // Set the initial state directly here
            animate={backgroundVariants[animationType]}
            transition={{ duration: 1.5 }}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
    );
};

export default AnimatedBackground;
