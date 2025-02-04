import React from "react";
import lopenzeLogo from "../../../assets/lopenze_logo.png";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    confirmButtonText: string;
    onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    message,
    confirmButtonText,
    onConfirm,
}) => {
    if (!isOpen) return null; // Prevents unnecessary rendering

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-96 relative">
                {/* Logo */}
                <div className="flex justify-center">
                    <img src={lopenzeLogo} alt="Lopenze Logo" className="w-14 h-14 mb-4" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-center text-gray-800">{title}</h2>

                {/* Message */}
                <p className="text-center text-gray-600 mt-2">{message}</p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
                    >
                        {confirmButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
