import React from "react";

// interface SliderArrowProps {
//   direction: "left" | "right"; // Determines the direction of the arrow
//   onClick: () => void; // Function to handle the button click
//   disabled?: boolean; // Optional: Disable the button if true
// }

interface SliderArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  className?: string; // Add this line
}
const SliderArrow: React.FC<SliderArrowProps> = ({
  direction,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute z-10 bg-white rounded-full shadow-lg p-3 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 ease-in-out ${
        direction === "left" ? "left-6" : "right-6"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <span className="text-gray-800 text-3xl">
        {direction === "left" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#C62A35"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#C62A35"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default SliderArrow;
