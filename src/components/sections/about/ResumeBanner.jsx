import React from 'react';
import { Download } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

/**
 * ResumeBanner callout card at the bottom of the About section
 */
export const ResumeBanner = () => {
  const { navigation } = portfolioData;

  return (
    <div className="w-full mt-6 sm:mt-8 bg-[#FAFAFB] border border-gray-200/90 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
      <div>
        <h3 className="font-bold text-base sm:text-[17px] text-[#18191C]">
          Want the full details?
        </h3>
        <p className="text-xs sm:text-sm text-[#737A87] mt-0.5 font-normal">
          Download my complete resume with projects, skills, and references.
        </p>
      </div>

      <a
        href={navigation.resumeUrl}
        className="bg-[#18191C] hover:bg-[#2c2e35] text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 shrink-0"
      >
        <Download className="w-4 h-4 stroke-[2.2]" />
        <span>Download Resume</span>
      </a>
    </div>
  );
};
