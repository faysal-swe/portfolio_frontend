import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { ScrollIndicator } from './ScrollIndicator';

/**
 * Hero section uniting the content, image, and scroll indicator
 */
export const Hero = ({ onExplore }) => {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-between pt-6 sm:pt-10 md:pt-14 pb-6">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 2xl:gap-20 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column: Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroImage />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <ScrollIndicator targetId="about" onExplore={onExplore} />
    </section>
  );
};
