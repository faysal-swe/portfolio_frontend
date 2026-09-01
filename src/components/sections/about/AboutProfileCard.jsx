import React from 'react';
import { MapPin, Briefcase, Mail } from 'lucide-react';
import { SocialIcon } from '../../common/SocialIcon';
import { portfolioData } from '../../../data/portfolioData';

/**
 * AboutProfileCard component with portrait photo and contact information
 */
export const AboutProfileCard = () => {
  const { personal, socials } = portfolioData;

  return (
    <div className="w-full flex flex-col">
      {/* Profile Portrait */}
      <div className="w-full aspect-[4/4.2] sm:aspect-[4/4.4] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100/80">
        <img
          src={personal.aboutPortraitUrl || personal.portraitUrl}
          alt={personal.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            // Fallback to portraitUrl if aboutPortraitUrl has an issue
            if (e.currentTarget.src !== personal.portraitUrl) {
              e.currentTarget.src = personal.portraitUrl;
            }
          }}
        />
      </div>

      {/* Info Card */}
      <div className="mt-4 bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm text-[#505763]">
          <MapPin className="w-4 h-4 text-[#8C93A0] shrink-0 stroke-[2]" />
          <span className="font-normal text-[#444A56]">{personal.location}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-[#505763]">
          <Briefcase className="w-4 h-4 text-[#8C93A0] shrink-0 stroke-[2]" />
          <span className="font-normal text-[#444A56]">{personal.role}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-[#505763]">
          <Mail className="w-4 h-4 text-[#8C93A0] shrink-0 stroke-[2]" />
          <a 
            href={`mailto:${personal.email}`}
            className="font-normal text-[#444A56] hover:text-[#18191C] transition-colors"
          >
            {personal.email}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-1"></div>

        {/* Social Links Row */}
        <div className="flex items-center gap-2.5 pt-0.5">
          {socials.map((social) => (
            <SocialIcon
              key={social.name}
              type={social.icon}
              href={social.href}
              label={social.name}
              shape="square"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
