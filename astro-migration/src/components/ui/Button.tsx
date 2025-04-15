// UI Button Component
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'px-6 py-3 rounded-lg font-semibold transition focus:outline-none';
  const variants = {
    primary: 'bg-cyan-500 text-white shadow-md hover:bg-cyan-600',
    ghost: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
};

export default Button;
