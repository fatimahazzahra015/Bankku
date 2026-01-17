import React from 'react';

const InputGroup = ({ 
  label, 
  value, 
  onChange, 
  type = "text", 
  isSelect = false, 
  options = [], 
  placeholder,
  disabled = false 
}) => {
  
  const baseInputStyles = `
    w-full px-5 py-3 md:py-4 
    border border-[#DFEAF2] rounded-[15px] 
    text-[12px] md:text-[15px] text-[#718EBF] 
    focus:outline-none focus:ring-1 focus:ring-[#1814F3] 
    transition-all bg-white
    disabled:bg-gray-50 disabled:cursor-not-allowed
  `;

  return (
    <div className="flex flex-col gap-2.5 w-full font-inter">
      <label className="text-[13px] md:text-[16px] text-[#232323] font-medium">
        {label}
      </label>
      
      <div className="relative group">
        {isSelect ? (
          <select
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseInputStyles} appearance-none cursor-pointer`}
          >
            {options.length === 0 && <option value="">Select option</option>}
            
            {options.map((opt, index) => (
              <option key={`${opt}-${index}`} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${baseInputStyles} ${type === "date" ? "appearance-none" : ""}`}
            onClick={(e) => type === "date" && e.target.showPicker?.()}
          />
        )}
        
        {(isSelect || type === "date") && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#718EBF]">
            <ChevronDownIcon />
          </div>
        )}
      </div>
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-4 h-4 md:w-5 md:h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default InputGroup;