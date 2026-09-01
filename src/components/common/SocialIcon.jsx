import React from 'react';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  globe: Globe,
};

/**
 * SocialIcon component rendering social buttons with customizable shape
 */
export const SocialIcon = ({ type, href, label, shape = "circle" }) => {
  const Icon = iconMap[type.toLowerCase()] || Mail;
  const roundedClass = shape === "square" ? "rounded-xl" : "rounded-full";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || type}
      className={`w-10 h-10 ${roundedClass} border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-950 hover:border-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs`}
    >
      <Icon className="w-4 h-4 stroke-[1.8]" />
    </a>
  );
};
