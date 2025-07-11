// components/Button.tsx
import React from 'react';
import Link from 'next/link'; // IMPORTED Link from next/link

// Define the props for the more flexible Button component
interface ButtonProps {
  href?: string;
  icon?: React.ReactNode;
  label?: string; // For the tooltip on icon-only buttons
  children?: React.ReactNode; // For visible text content
  openInNewTab?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  showLabel?: boolean;
  seamless?: boolean;
}

export function Button({ 
  href, 
  icon, 
  label, 
  children,
  openInNewTab = true, 
  type,
  disabled,
  onClick,
  className,
  showLabel = true,
  seamless = false
}: ButtonProps) {
  // Define the two different styles
  const standardClasses = `
    group bg-[--bg-tertiary] backdrop-blur-sm border-1.5 border-[--bg-tertiary] rounded-lg p-4 
    text-[--text-primary] hover:bg-[--accent] hover:text-[--bg-primary] hover:shadow-lg 
    transition-all duration-200 flex items-center justify-center 
    relative shadow-md disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const seamlessClasses = `
    transition-colors duration-200 flex items-center text-[--text-primary] hover:text-[--text-secondary] font-semibold
  `;

  // Apply the correct style based on the `seamless` prop
  const appliedClasses = seamless ? seamlessClasses : standardClasses;

  // Common props for both links and buttons
  const commonProps = {
    className: `${appliedClasses} ${className || ''}`,
    style: { transition: 'all var(--transition)' },
    'aria-label': label || (typeof children === 'string' ? children : ''),
    onClick: onClick,
  };

  const content = (
    <>
      {icon}
      {children}
      {!children && label && showLabel && (
        <span
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded 
                     bg-[--bg-secondary] text-[--text-primary] text-xs opacity-0 group-hover:opacity-100 
                     transition-opacity duration-200 shadow-lg z-20 whitespace-nowrap"
        >
          {label}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        passHref
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        {...commonProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type || 'button'}
      disabled={disabled}
      {...commonProps}
    >
      {content}
    </button>
  );
}
