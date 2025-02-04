import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    animationType?: "fade" | "bounce" | "slide" | "scale";
    className?: string;
    delay?: number;
}

const variants = {
    fade: { opacity: 1 },
    bounce: { y: [0, -10, 0] },
    slide: { x: [-50, 0] },
    scale: { scale: [0.8, 1] },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    animationType = "fade",
    className = "",
    delay = 0,
}) => {
    return (
        <motion.h1
            className={`text-4xl md:text-5xl font-extrabold ${className}`}
            initial={{ opacity: 0 }} // Set the initial state directly here
            animate={variants[animationType]}
            transition={{ duration: 1, delay }}
        >
            {text}
        </motion.h1>
    );
};

export default AnimatedText;
