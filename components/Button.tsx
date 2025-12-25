'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonSize = 'large' | 'default' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(15,76,182,0.3)] active:translate-y-0 active:shadow-[0_2px_6px_rgba(15,76,182,0.2)] focus:ring-[var(--color-primary)]',
    secondary: 'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]',
    text: 'bg-transparent text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-primary-dark)] focus:ring-[var(--color-primary)]',
  };
  
  const sizes = {
    large: 'px-10 py-4 text-lg',
    default: 'px-8 py-3.5 text-base',
    small: 'px-6 py-2.5 text-sm',
  };
  
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];
  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}

