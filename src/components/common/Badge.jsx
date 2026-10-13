import React from 'react';

export function Badge({ children, variant = 'primary', icon: Icon, className = '', style = {} }) {
  return (
    <span className={`tag-badge tag-badge-${variant} ${className}`} style={style}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}
