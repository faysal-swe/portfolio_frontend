import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';

/**
 * Main Application Component
 */
export function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white text-[#121316] flex flex-col font-sans selection:bg-[#18191C] selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && <Hero onExplore={() => setActiveTab('about')} />}
        {activeTab === 'about' && <About />}
        {activeTab !== 'home' && activeTab !== 'about' && (
          <div className="max-w-[1440px] mx-auto px-6 py-20 text-center">
            <h2 className="text-2xl font-bold capitalize text-[#18191C] mb-2">{activeTab}</h2>
            <p className="text-gray-500 mb-6">This section is coming soon.</p>
            <button 
              onClick={() => setActiveTab('home')}
              className="bg-[#18191C] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#2c2e35] transition-all"
            >
              Back to Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
