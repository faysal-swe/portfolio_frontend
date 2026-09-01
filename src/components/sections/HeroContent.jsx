import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { Button } from '../common/Button';
import { SocialIcon } from '../common/SocialIcon';
import { portfolioData } from '../../data/portfolioData';

/**
 * HeroContent component for the left column introduction
 */
export const HeroContent = () => {
  const { personal, actions, socials } = portfolioData;

  return (
    <div className="flex flex-col items-start justify-center w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
      {/* Availability Status Badge */}
      <StatusBadge 
        text={personal.status.text} 
        isAvailable={personal.status.isAvailable} 
      />

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[66px] 2xl:text-[74px] font-extrabold text-[#111317] tracking-[-0.03em] leading-[1.1] mb-5 xl:mb-6 text-balance">
        Hi, I'm {personal.name}
      </h1>

      {/* Subheading */}
      <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-[#505763] tracking-tight leading-snug mb-4 xl:mb-6 text-balance">
        Senior Software Engineer building scalable,<br className="hidden sm:inline" /> elegant web experiences.
      </h2>

      {/* Bio Description */}
      <p className="text-sm sm:text-[15px] xl:text-base 2xl:text-lg text-[#656C7A] leading-relaxed mb-8 xl:mb-10 max-w-lg xl:max-w-2xl font-normal">
        {personal.bio}
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 xl:mb-10">
        <Button 
          href={actions.primary.href} 
          variant="primary"
          icon={ArrowRight}
          iconPosition="right"
        >
          {actions.primary.label}
        </Button>

        <Button 
          href={actions.secondary.href} 
          variant="outline"
          icon={Mail}
          iconPosition="left"
        >
          {actions.secondary.label}
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 sm:gap-4">
        {socials.map((social) => (
          <SocialIcon 
            key={social.name}
            type={social.icon}
            href={social.href}
            label={social.name}
          />
        ))}
      </div>
    </div>
  );
};
