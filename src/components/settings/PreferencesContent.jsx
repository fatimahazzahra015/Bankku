import React, { useState } from 'react';
import InputGroup from './InputGroup';
import ToggleSwitch from './ToggleSwitch';

const PreferencesContent = () => {
  const [preferences, setPreferences] = useState({
    currency: "USD",
    timeZone: "(GMT-12:00) International Date Line West"
  });

  const [notifications, setNotifications] = useState({
    sendReceive: true,
    merchantOrder: false,
    recommendations: true
  });

  const [uiState, setUiState] = useState({
    isLoading: false,
    showSuccess: false
  });

  const handleInputChange = (e, field) => {
    setPreferences(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleToggleChange = (field) => {
    setNotifications(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const onSaveSettings = (e) => {
    e.preventDefault();
    setUiState({ ...uiState, isLoading: true });

    setTimeout(() => {
      setUiState({ isLoading: false, showSuccess: true });
    }, 500);
  };

  const notificationOptions = [
    { id: 'sendReceive', label: 'I send or receive digital currency' },
    { id: 'merchantOrder', label: 'I receive merchant order' },
    { id: 'recommendations', label: 'There are recommendation for my account' }
  ];

  return (
    <div className="mt-10 font-inter flex flex-col gap-8">
      
      {/* Settings Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <InputGroup 
          label="Currency"
          isSelect
          value={preferences.currency}
          options={["USD", "EUR", "IDR", "GBP", "JPY"]}
          onChange={(e) => handleInputChange(e, 'currency')}
        />
        <InputGroup 
          label="Time Zone" 
          labelSize="text-[16px]"
          isSelect
          value={preferences.timeZone}
          options={[
            "(GMT-12:00) International Date Line West",
            "(GMT+07:00) Bangkok, Hanoi, Jakarta",
            "(GMT+00:00) Western Europe Time, London",
            "(GMT-05:00) Eastern Time (US & Canada)"
          ]}
          onChange={(e) => handleInputChange(e, 'timeZone')}
        />
      </div>

      {/* Notification Toggles Section */}
      <div className="space-y-4">
        <h3 className="text-[13px] md:text-[16px] text-[#232323] font-medium">
          Notification
        </h3>
        <div className="flex flex-col gap-1">
          {notificationOptions.map((item) => (
            <ToggleSwitch 
              key={item.id}
              label={item.label} 
              checked={notifications[item.id]} 
              onChange={() => handleToggleChange(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-4">
        <button 
          onClick={onSaveSettings}
          disabled={uiState.isLoading}
          className="w-full md:w-48 bg-[#1814F3] text-white py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-all active:scale-95 flex justify-center items-center gap-3 disabled:opacity-70"
        >
          {uiState.isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Saving...
            </>
          ) : "Save"}
        </button>
      </div>
      {uiState.showSuccess && (
        <SuccessPopup 
          onClose={() => setUiState(prev => ({ ...prev, showSuccess: false }))} 
        />
      )}
    </div>
  );
};

{/* Success Popup */}
const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 text-center">
    <div className="bg-white rounded-[30px] p-8 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in">
      <div className="w-16 h-16 rounded-full bg-[#E7F7EF] flex items-center justify-center mx-auto mb-5 text-[#2DAB6D]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-[#343C6A] text-2xl font-bold mb-2">Preferences Saved!</h4>
      <p className="text-[#718EBF] text-sm mb-8">Your preference settings have been successfully updated.</p>
      <button 
        onClick={onClose}
        className="w-full py-3.5 bg-[#1814F3] text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg"
      >
        Great!
      </button>
    </div>
  </div>
);

export default PreferencesContent;