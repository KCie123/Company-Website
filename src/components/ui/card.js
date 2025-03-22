// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`p-4 border rounded shadow ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`border-b pb-2 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);
