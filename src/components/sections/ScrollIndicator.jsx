import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollIndicator component prompting the user to scroll down
 */
export const ScrollIndicator = ({ targetId = 'about', onExplore }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-8 pb-6">
      <a 
        href={`#${targetId}`}
        onClick={(e) => {
          if (onExplore) {
            e.preventDefault();
            onExplore(targetId);
          }
        }}
        className="group flex flex-col items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer select-none"
        aria-label="Scroll to explore more"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-600 transition-colors">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 stroke-[2.2] animate-bounce-subtle text-gray-400 group-hover:text-gray-600 transition-colors" />
      </a>
    </div>
  );
};
