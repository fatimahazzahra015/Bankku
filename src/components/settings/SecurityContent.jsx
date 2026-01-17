import React, { useState } from 'react';
import InputGroup from './InputGroup';
import ToggleSwitch from './ToggleSwitch';

const SecurityContent = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const [twoFactor, setTwoFactor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e, field) => {
    setPasswords(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessPopup(true);
      setPasswords({ currentPassword: "", newPassword: "" });
    }, 500);
  };

  return (
    <div className="mt-10 flex flex-col gap-4 relative font-inter">
      {/*Two-factor Authentication Section*/}
      <section className="flex flex-col gap-4">
        <h3 className="text-base md:text-lg font-semibold text-[#334369]">
          Two-factor Authentication
        </h3>
        <ToggleSwitch 
          label="Enable or disable two factor authentication" 
          checked={twoFactor} 
          onChange={() => setTwoFactor(!twoFactor)}
        />
      </section>

      {/*Change Password Section*/}
      <section className="flex flex-col gap-2">
        <h3 className="text-base md:text-lg font-semibold text-[#334369]">
          Change Password
        </h3>
        
        <form className="w-full" onSubmit={handleSave}>
          <div className="grid grid-cols-1 gap-y-5 max-w-[510px]">
            <InputGroup 
              label="Current Password" 
              type="password" 
              placeholder="Enter current password"
              value={passwords.currentPassword}
              onChange={(e) => handleInputChange(e, 'currentPassword')}
            />
            <InputGroup 
              label="New Password" 
              type="password" 
              placeholder="Enter new password"
              value={passwords.newPassword}
              onChange={(e) => handleInputChange(e, 'newPassword')}
            />
          </div>
          
          <div className="flex justify-end mt-12 lg:mt-20">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full md:w-[190px] bg-[#1814F3] text-white py-3.5 rounded-2xl font-semibold text-base md:text-lg hover:bg-blue-800 transition-all active:scale-95 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </>
              ) : "Save"}
            </button>
          </div>
        </form>
      </section>
      {showSuccessPopup && (
        <SuccessModal onClose={() => setShowSuccessPopup(false)} />
      )}
    </div>
  );
};

{/* Success Popup */}
const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#343C6A]/30 backdrop-blur-sm p-4 text-center">
    <div className="bg-white rounded-[30px] p-8 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 rounded-full bg-[#E7F7EF] flex items-center justify-center mx-auto mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2DAB6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-[#343C6A] text-2xl font-bold mb-2">Security Updated!</h4>
      <p className="text-[#718EBF] text-sm mb-8">Your password and security settings have been successfully updated.</p>
      <button 
        onClick={onClose}
        className="w-full py-3.5 bg-[#1814F3] text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95"
      >
        Great!
      </button>
    </div>
  </div>
);

export default SecurityContent;