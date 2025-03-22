// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  let baseClasses = "px-4 py-2 rounded font-semibold focus:outline-none transition";
  let variantClasses = "";

  if (variant === 'primary') {
    variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  }
  // Add more variants as needed

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
