// import React from "react";
// import { APP_COLORS } from "../../config/config";

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   variant?: "primary" | "secondary"; // Add a variant prop for color options
// }

// const Button = ({ children, onClick, className, variant = "primary" }: ButtonProps) => {
//   // Dynamically apply colors based on the variant
//   const colorClasses =
//     variant === "primary"
//       ? `${APP_COLORS.primary} text-black hover:bg-gray-200`
//       : `${APP_COLORS.secondary} text-white hover:bg-red-700`;

//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-lg ${colorClasses} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

import React from "react";
import { APP_COLORS } from "../../config/config";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "alternate"
    | "danger"
    | "success"
    | "warning"; // Add more variants
}

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) => {
  // Dynamically apply colors based on the variant
  const colorClasses = (() => {
    switch (variant) {
      case "primary":
        return `${APP_COLORS.primary} text-black hover:bg-gray-200`;
      case "secondary":
        return `${APP_COLORS.secondary} text-white hover:bg-red-700`;
      case "outlined":
        // Outlined button with different border and background colors
        return `border-2 border-${APP_COLORS.secondary} bg-transparent text-${APP_COLORS.primary} hover:bg-${APP_COLORS.secondary} hover:text-white`;
      case "alternate":
        return `bg-${APP_COLORS.secondary} text-black hover:bg-${APP_COLORS.primary}`;
      case "danger":
        return "bg-red-600 text-white hover:bg-red-700";
      case "success":
        return "bg-green-600 text-white hover:bg-green-700";
      case "warning":
        return "bg-yellow-500 text-black hover:bg-yellow-600";
      default:
        return `${APP_COLORS.primary} text-black hover:bg-gray-200`;
    }
  })();

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
