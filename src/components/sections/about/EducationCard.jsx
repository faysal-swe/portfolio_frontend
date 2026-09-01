import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

/**
 * EducationCard component showing degrees, certifications, and institutions
 */
export const EducationCard = () => {
  const { about } = portfolioData;

  const getIcon = (type) => {
    switch (type) {
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-[#2D3139] stroke-[2]" />;
      case 'award':
      default:
        return <Award className="w-5 h-5 text-[#2D3139] stroke-[2]" />;
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
      <h3 className="font-bold text-base sm:text-[17px] text-[#18191C] mb-5">
        Education
      </h3>

      <div className="flex flex-col gap-5">
        {about.education.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gray-100/90 flex items-center justify-center shrink-0 border border-gray-200/50">
              {getIcon(item.icon)}
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold text-sm sm:text-[15px] text-[#18191C] leading-snug">
                {item.degree}
              </h4>
              <p className="text-xs sm:text-sm text-[#737A87] mt-0.5 font-normal">
                {item.institution} · {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
