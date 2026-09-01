import React from 'react';
import { FloatingStatCard } from './FloatingStatCard';
import { portfolioData } from '../../data/portfolioData';

/**
 * HeroImage component for the right visual section with portrait and floating cards
 */
export const HeroImage = () => {
  const { personal, stats } = portfolioData;
  const projectStat = stats.find(s => s.id === 'projects') || stats[0];
  const experienceStat = stats.find(s => s.id === 'experience') || stats[1];

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[580px] mx-auto lg:mx-0 lg:ml-auto flex items-center justify-center lg:justify-end">
      {/* Visual Frame Wrapper with subtle ambient backdrop */}
      <div className="relative p-2.5 sm:p-3.5 md:p-4 bg-gray-100/70 rounded-[32px] sm:rounded-[40px] shadow-sm border border-gray-100 w-full">
        
        {/* Main Portrait Container */}
        <div className="relative w-full aspect-[4/4.6] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gray-200 shadow-inner group">
          <img
            src={personal.portraitUrl}
            alt={personal.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
          {/* Subtle lighting vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Top-Right Floating Stat Card: 40+ Projects Delivered */}
        {projectStat && (
          <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:-top-5 lg:-right-5 z-20">
            <FloatingStatCard
              title={projectStat.title}
              subtitle={projectStat.subtitle}
              variant={projectStat.type}
            />
          </div>
        )}

        {/* Bottom-Left Floating Stat Card: 6+ Years Experience */}
        {experienceStat && (
          <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-5 lg:-left-5 z-20">
            <FloatingStatCard
              title={experienceStat.title}
              subtitle={experienceStat.subtitle}
              variant={experienceStat.type}
            />
          </div>
        )}
      </div>
    </div>
  );
};
