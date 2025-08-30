import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
