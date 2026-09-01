import React from 'react';

/**
 * StatusBadge component displaying availability status
 */
export const StatusBadge = ({ text, isAvailable = true }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEBED]/70 text-[#474D57] text-xs font-medium tracking-tight mb-6">
      <span className="relative flex h-2 w-2">
        {isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D3139]" />
      </span>
      <span>{text}</span>
    </div>
  );
};
