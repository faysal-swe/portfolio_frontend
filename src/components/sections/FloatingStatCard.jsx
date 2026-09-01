import React from 'react';
import { Briefcase, FolderKanban } from 'lucide-react';

/**
 * FloatingStatCard component for rendering highlight metrics over the hero image
 */
export const FloatingStatCard = ({ 
  title,
  subtitle,
  value,
  label,
  sublabel,
  variant = 'light',
  className = '' 
}) => {
  // Support both title/subtitle and value/label/sublabel API cleanly
  const displayTitle = title || (value && label ? `${value} ${label}` : value || label);
  const displaySubtitle = subtitle || sublabel;

  return (
    <div 
      className={`inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] border border-gray-100/90 transition-all duration-300 hover:-translate-y-1 select-none whitespace-nowrap ${className}`}
    >
      {/* Icon Badge */}
      {variant === 'dark' ? (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#18191C] flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
        </div>
      ) : (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100/90 flex items-center justify-center text-gray-700 flex-shrink-0">
          <FolderKanban className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
        </div>
      )}

      {/* Metric details */}
      <div className="flex flex-col text-left leading-tight">
        <span className="text-sm sm:text-[15px] font-bold text-[#18191C] tracking-tight">
          {displayTitle}
        </span>
        {displaySubtitle && (
          <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
            {displaySubtitle}
          </span>
        )}
      </div>
    </div>
  );
};
