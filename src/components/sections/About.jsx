import React from 'react';
import { AboutProfileCard } from './about/AboutProfileCard';
import { EducationCard } from './about/EducationCard';
import { JourneySection } from './about/JourneySection';
import { ResumeBanner } from './about/ResumeBanner';
import { portfolioData } from '../../data/portfolioData';

/**
 * About section presenting personal bio, education, career journey, and resume download
 */
export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="w-full py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait and Info Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            <AboutProfileCard />
          </div>

          {/* Right Column: Bio Narrative & Education */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-start">
            
            {/* About Me Pill Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-gray-100/90 text-[#3C414C] text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200/60 mb-4 sm:mb-5">
              <span>{about.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111317] tracking-tight leading-[1.18] mb-6">
              {about.heading}
            </h1>

            {/* Bio Narrative */}
            <div className="space-y-4 text-sm sm:text-[15px] lg:text-base text-[#525966] leading-relaxed font-normal">
              <p>
                {about.intro}
              </p>

              {about.paragraphs.map((para, index) => (
                <p key={index}>
                  <strong className="font-semibold text-[#18191C]">
                    {para.title}{' '}
                  </strong>
                  {para.content}
                </p>
              ))}
            </div>

            {/* Education Card */}
            <div className="mt-8">
              <EducationCard />
            </div>

          </div>

        </div>

        {/* My Journey Section */}
        <JourneySection />

        {/* Bottom Resume Banner */}
        <ResumeBanner />

      </div>
    </section>
  );
};
