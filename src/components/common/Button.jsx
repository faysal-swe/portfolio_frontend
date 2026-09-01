import React from 'react';

/**
 * Reusable Button component supporting primary, outline, and custom styling
 */
export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap select-none";
  
  const variants = {
    primary: "bg-[#18191C] hover:bg-[#2c2e36] active:scale-[0.98] text-white shadow-sm hover:shadow-md focus-visible:ring-[#18191C] rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base tracking-tight gap-2.5",
    outline: "bg-white hover:bg-gray-50 active:scale-[0.98] text-[#22252A] border border-gray-200/90 hover:border-gray-300 focus-visible:ring-gray-400 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base tracking-tight shadow-sm hover:shadow gap-2.5",
    navPill: "bg-[#18191C] hover:bg-[#2c2e35] active:scale-[0.97] text-white rounded-lg px-5 py-2.5 text-sm font-medium transition-colors shadow-sm",
    social: "w-11 h-11 rounded-full border border-gray-200/80 hover:border-gray-900 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} aria-label={ariaLabel} {...props}>
      {content}
    </button>
  );
};
