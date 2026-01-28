import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-red hover:bg-red-800 text-white border-2 border-transparent",
    secondary: "bg-brand-orange hover:bg-orange-700 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white border-2 border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;