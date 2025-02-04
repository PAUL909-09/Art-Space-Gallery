import { motion } from "framer-motion";

const AnimatedTitle = () => {
    return (
        <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white text-center px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
        >
            Welcome to <br />
            <span className="text-[#C62A35]">LOPENZE</span> Art Gallery
        </motion.h1>
    );
};

export default AnimatedTitle;
