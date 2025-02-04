import { motion } from "framer-motion";

interface AnimatedContainerProps {
    children: React.ReactNode;
    animationType?: "fade" | "slide" | "zoom";
    className?: string;
}

const containerVariants = {
    fade: { opacity: [0, 1] },
    slide: { x: [100, 0] },
    zoom: { scale: [0.8, 1] },
};

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
    children,
    animationType = "fade",
    className = "",
}) => {
    return (
        <motion.div
            className={`p-8 shadow-lg ${className}`}
            initial={{ opacity: 0 }} // Set the initial state directly here
            animate={containerVariants[animationType]}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContainer;
