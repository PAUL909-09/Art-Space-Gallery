import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center space-x-4 mt-8">
            {/* Previous Arrow */}
            <button
                className={`px-4 py-2 text-xl rounded-lg ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-red-500 hover:text-red-700"
                    }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
            >
                ←
            </button>

            {/* Next Arrow */}
            <button
                className={`px-4 py-2 text-xl rounded-lg ${currentPage === totalPages - 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-red-500 hover:text-red-700"
                    }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
            >
                →
            </button>
        </div>
    );
};

export default Pagination;
