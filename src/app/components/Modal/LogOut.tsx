


import { motion } from "framer-motion";
import { Image } from "../../config/config";

interface LogOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogOutModal = ({ isOpen, onClose, onConfirm }: LogOutModalProps) => {
  if (!isOpen) return null;

  const lopenzeLogo = Image[0]; // Get Lopenze logo from config

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
          <img
            src={lopenzeLogo.src}
            alt={lopenzeLogo.alt}
            className="w-24 h-auto"
          />
        </div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white text-center">
          Confirm Logout
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Are you sure you want to log out?
        </p>
        <div className="flex justify-center space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-gray-600 text-outline-bold hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors outline outline-1 outline-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#C62A35] text-white rounded-md hover:bg-[#A52229] transition-colors"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogOutModal;
