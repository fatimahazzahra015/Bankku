import React from 'react';

const TabSettings = ({ activeTab, setActiveTab }) => {
  const tabs = ['Edit Profile', 'Preferences', 'Security'];

  return (
    <div className="flex border-b font-inter border-[#F4F5F7] gap-8 md:gap-16">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`
              pb-3 text-sm md:text-base font-medium transition-all relative
              ${isActive ? 'text-[#1814F3]' : 'text-[#718EBF] hover:text-[#1814F3]/70'}
            `}
          >
            {tab}
            
            {isActive && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1814F3] rounded-t-full animate-in fade-in slide-in-from-bottom-1 duration-200" 
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabSettings;