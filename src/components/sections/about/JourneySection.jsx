import React, { useState } from 'react';
import { portfolioData } from '../../../data/portfolioData';

/**
 * JourneySection component rendering work experience and career milestones
 */
export const JourneySection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { journey } = portfolioData;

  const items = activeTab === 'experience' ? journey.experiences : journey.milestones;

  return (
    <div className="w-full mt-12 sm:mt-16">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#18191C] tracking-tight">
          {journey.title}
        </h2>

        {/* Tab Switcher */}
        <div className="bg-gray-100/90 p-1 rounded-xl flex items-center border border-gray-200/50">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 ${
              activeTab === 'experience'
                ? 'bg-white text-[#18191C] shadow-xs font-semibold'
                : 'text-[#646A74] hover:text-[#18191C]'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 ${
              activeTab === 'milestones'
                ? 'bg-white text-[#18191C] shadow-xs font-semibold'
                : 'text-[#646A74] hover:text-[#18191C]'
            }`}
          >
            Milestones
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Period Badge */}
              <div className="inline-block bg-gray-100 text-[#444A56] text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200/60 mb-4">
                {item.period}
              </div>

              {/* Role Title */}
              <h3 className="font-bold text-base sm:text-[17px] text-[#18191C] leading-snug mb-1">
                {item.role}
              </h3>

              {/* Company / Category */}
              <p className="text-xs sm:text-sm text-[#737A87] font-medium mb-3">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#505763] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
