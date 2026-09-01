import React, { useState } from 'react';
import { Menu, X, Code2, Moon, Sun, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * Navbar component with brand logo, active underline nav links, theme toggle, and CTA
 */
export const Navbar = ({ activeTab = 'about', onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { navigation, personal } = portfolioData;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-40 transition-all duration-200 border-b border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              if (onTabChange) {
                e.preventDefault();
                onTabChange('home');
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#18191C] flex items-center justify-center text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
              <Code2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-lg sm:text-[19px] tracking-tight text-[#18191C]">
              {personal.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <div className="flex items-center gap-6 lg:gap-8 text-[15px] font-medium">
              {navigation.links.map((link) => {
                const isActive = activeTab === link.id || (!activeTab && link.id === 'about');
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      if (onTabChange) {
                        e.preventDefault();
                        onTabChange(link.id);
                      }
                    }}
                    className={`relative py-2 transition-colors duration-150 ${
                      isActive
                        ? 'text-[#18191C] font-semibold'
                        : 'text-[#646A74] hover:text-[#18191C]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18191C] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pl-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#646A74] hover:text-[#18191C] hover:bg-gray-100 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4 stroke-[2]" />
                )}
              </button>

              {/* Resume CTA */}
              <a
                href={navigation.resumeUrl}
                className="bg-[#18191C] hover:bg-[#2c2e35] text-white text-sm font-medium px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-sm active:scale-[0.98] flex items-center gap-2"
              >
                <Download className="w-4 h-4 stroke-[2.2]" />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-6 pt-3 pb-6 space-y-3 shadow-lg">
          {navigation.links.map((link) => {
            const isActive = activeTab === link.id || (!activeTab && link.id === 'about');
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onTabChange) {
                    e.preventDefault();
                    onTabChange(link.id);
                  }
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-gray-100 text-[#18191C] font-semibold'
                    : 'text-[#646A74] hover:bg-gray-50 hover:text-[#18191C]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href={navigation.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#18191C] text-white font-medium px-4 py-2.5 rounded-xl shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
