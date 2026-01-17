import React from 'react';

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-4 py-2 group">
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={checked} 
          onChange={onChange}
        />
        
        {/* Toggle UI Track */}
        <div className="
          w-11 h-6 bg-[#E9EDF1] rounded-full transition-colors
          peer-focus:outline-none 
          peer-checked:bg-[#16DBCC]
          
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
          after:bg-white after:rounded-full after:h-5 after:w-5 
          after:transition-all after:shadow-sm
          peer-checked:after:translate-x-full
        ">
        </div>
      </label>

      {/* Label Text */}
      <span className="text-sm md:text-base text-[#343C6A] font-normal leading-tight">
        {label}
      </span>
    </div>
  );
};

export default ToggleSwitch;