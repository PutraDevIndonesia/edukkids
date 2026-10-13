import React from 'react';

export function Card({ children, className = '', style = {}, onClick, ...props }) {
  return (
    <div
      className={`card-panel ${className}`}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        transition: onClick ? 'transform 0.15s ease, box-shadow 0.15s ease' : undefined,
        ...style
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
