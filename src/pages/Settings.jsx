import React, { useState } from 'react';
import TabSettings from '../components/settings/TabSetting';
import EditProfileContent from '../components/settings/EditProfileContent';
import PreferencesContent from '../components/settings/PreferencesContent';
import SecurityContent from '../components/settings/SecurityContent';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  return (
    <div className="p-6 lg:p-4 bg-[#F5F7FA] min-h-screen px-2 lg:px-4 py-2 lg:py-4">
      <div className="bg-white rounded-[25px] p-6 lg:p-10 shadow-sm mt-0">
        
        <TabSettings activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4 md:mt-8"> 
          {activeTab === 'Edit Profile' && <EditProfileContent />}
          {activeTab === 'Preferences' && <PreferencesContent />}
          {activeTab === 'Security' && <SecurityContent />}
        </div>

      </div>
    </div>
  );
};

export default Settings;