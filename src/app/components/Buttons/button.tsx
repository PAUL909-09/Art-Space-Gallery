import React from "react";
import { APP_COLORS } from "../../config/config";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary"; // Add a variant prop for color options
}

const Button = ({ children, onClick, className, variant = "primary" }: ButtonProps) => {
  // Dynamically apply colors based on the variant
  const colorClasses =
    variant === "primary"
      ? `${APP_COLORS.primary} text-black hover:bg-gray-200`
      : `${APP_COLORS.secondary} text-white hover:bg-red-700`;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${colorClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
