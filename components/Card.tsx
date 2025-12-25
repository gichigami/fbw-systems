import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  elevated = false,
  hover = false,
}: CardProps) {
  const baseStyles = 'bg-[var(--color-bg-elevated)] rounded-2xl p-8 border border-[var(--color-border)]';
  const shadow = elevated
    ? 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
    : 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]';
  const hoverStyles = hover
    ? 'transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
    : '';
  
  return (
    <div className={`${baseStyles} ${shadow} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

