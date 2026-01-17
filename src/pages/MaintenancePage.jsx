import React from 'react';

const MaintenancePage = ({ pageName }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-inter">
      {/* Ilustrasi Maintenance */}
      <div className="relative mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F4F7FE] rounded-full flex items-center justify-center animate-pulse">
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-[#1814F3] md:w-20 md:h-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 15V17M12 7V11M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Conten */}
      <h2 className="text-[#343C6A] text-2xl md:text-3xl font-bold mb-3">
        {pageName} is Under Maintenance
      </h2>
      <p className="text-[#718EBF] text-[14px] md:text-[16px] max-w-md leading-relaxed">
        This page is currently undergoing maintenance. We will be back soon with better updates. Thank you for your understanding.
      </p>

      {/* Back */}
      <button 
        onClick={() => window.history.back()}
        className="mt-10 px-8 py-3 bg-[#1814F3] text-white rounded-2xl font-semibold hover:bg-blue-800 transition-all active:scale-95"
      >
        Go Back
      </button>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;