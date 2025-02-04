import { motion } from "framer-motion";
import { Image } from "../../config/config";
import { useState, useEffect } from "react";

interface LogOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogOutModal = ({ isOpen, onClose, onConfirm }: LogOutModalProps) => {
  if (!isOpen) return null;

  const lopenzeLogo = Image[0]; // Get Lopenze logo from config
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center mb-4">
          {/* <img
                        src={lopenzeLogo.src}
                        alt={lopenzeLogo.alt}
                        className="w-24 h-auto"
                    /> */}
        </div>
        <div className="text-3xl text-center mb-4">
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-9xl mb-2"
          >
            😴
          </motion.div>
          <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {formatTime(time)}
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 dark:text-white text-center">
          Gising ka pa ba?
        </h2>
        <h3 className="text-gray-900 text-xl dark:text-gray-300 mb-6 text-center">
          <br />
          <span className="text-2xl font-bold">
            Gusto mo na bang matulog???{" "}
          </span>
          <span className="text-6xl font-bold"> 🤔</span>
        </h3>
        <div className="flex justify-center space-x-3">
          <button
            onClick={(e) => {
              const btn = e.currentTarget;
              const particles = 50;
              const colors = [
                "#ffd700",
                "#ff0000",
                "#00ff00",
                "#0000ff",
                "#ff00ff",
              ];

              for (let i = 0; i < particles; i++) {
                const particle = document.createElement("div");
                const angle = (i / particles) * 360;
                const velocity = 4 + Math.random() * 3;

                particle.style.position = "fixed";
                particle.style.left =
                  btn.offsetLeft + btn.offsetWidth / 2 + "px";
                particle.style.top =
                  btn.offsetTop + btn.offsetHeight / 2 + "px";
                particle.style.width = "8px";
                particle.style.height = "8px";
                particle.style.backgroundColor =
                  colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = "50%";
                particle.style.pointerEvents = "none";

                document.body.appendChild(particle);

                const animation = particle.animate(
                  [
                    { transform: "translate(0, 0)" },
                    {
                      transform: `translate(${
                        Math.cos((angle * Math.PI) / 180) * 200 * velocity
                      }px, 
                                                            ${
                                                              Math.sin(
                                                                (angle *
                                                                  Math.PI) /
                                                                  180
                                                              ) *
                                                              200 *
                                                              velocity
                                                            }px)`,
                      opacity: 0,
                    },
                  ],
                  {
                    duration: 1500,
                    easing: "cubic-bezier(0,0,0.2,1)",
                  }
                );

                animation.onfinish = () => particle.remove();
              }
              onClose();
            }}
            className="px-4 py-2 rounded-md text-gray-600 text-xl text-outline-bold hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors outline outline-1 outline-gray-300"
          >
            Wag nakakahiya 👀
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#C62A35] text-white rounded-md hover:bg-[#A52229] transition-colors"
          >
            Tutulog na 💤
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogOutModal;