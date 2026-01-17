import React, { useState, useRef } from 'react';
import InputGroup from './InputGroup';
import editIcon from '../../asset/pencil.png';
import profileDefault from '../../asset/pict.jpg';

const EditProfileContent = () => {
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    dob: "1990-01-25",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA"
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [profileImage, setProfileImage] = useState(profileDefault);
  
  const fileInputRef = useRef(null);

  const formFields = [
    { id: 'name', label: 'Your Name' },
    { id: 'username', label: 'User Name' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password', isReadOnly: true },
    { id: 'dob', label: 'Date of Birth', type: 'date' },
    { id: 'presentAddress', label: 'Present Address' },
    { id: 'permanentAddress', label: 'Permanent Address' },
    { id: 'city', label: 'City' },
    { id: 'postalCode', label: 'Postal Code' },
    { id: 'country', label: 'Country' },
  ];

  const handleChange = (e, field) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessPopup(true);
    }, 500);
  };

  return (
    <div className="mt-10 flex flex-col font-inter lg:flex-row gap-12 relative">
      
      {/* Profile Picture Section */}
      <div className="flex-shrink-0 flex justify-center lg:block">
        <div className="relative w-24 h-24 md:w-[130px] md:h-[130px]">
          <img 
            src={profileImage}
            alt="Profile" 
            className="w-full h-full rounded-full object-cover border-2 border-[#F3F3F3]" 
          />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden" 
            accept="image/*"
          />
          <button 
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-1 right-1 bg-[#1814F3] p-2.5 rounded-full border-[4px] border-white shadow-md hover:bg-blue-700 transition-all active:scale-90"
          >
            <img src={editIcon} alt="Edit" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Form Section */}
      <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5" onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <InputGroup 
            key={field.id}
            label={field.label}
            type={field.type || 'text'}
            value={field.isReadOnly ? "********" : formData[field.id]}
            onChange={(e) => !field.isReadOnly && handleChange(e, field.id)}
          />
        ))}
        
        <div className="md:col-span-2 flex justify-end mt-6 md:mt-10">
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full md:w-48 bg-[#1814F3] text-white py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-all active:scale-95 flex justify-center items-center gap-3 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </>
            ) : "Save"}
          </button>
        </div>
      </form>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#343C6A]/30 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[30px] p-8 w-full max-w-sm text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E7F7EF] flex items-center justify-center mx-auto mb-5 text-[#2DAB6D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-[#343C6A] text-2xl font-bold mb-2">Changes Saved!</h4>
            <p className="text-[#718EBF] text-sm mb-8">Your profile information has been updated successfully.</p>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full py-3.5 bg-[#1814F3] text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg"
            >
              Great!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfileContent;