import React from 'react';
import personalIcon from '../../asset/personal loans.png'; 
import corporateIcon from '../../asset/corporate loans.png';
import businessIcon from '../../asset/business loans.png';
import customIcon from '../../asset/custom loans.png';

const LoanStats = () => {
  const loanData = [
    { id: 1, label: 'Personal Loans', amount: '$50,000', icon: personalIcon, color: 'bg-[#E7EDFF]' },
    { id: 2, label: 'Corporate Loans', amount: '$100,000', icon: corporateIcon, color: 'bg-[#FFF5D9]' },
    { id: 3, label: 'Business Loans', amount: '$500,000', icon: businessIcon, color: 'bg-[#FFE0EB]' },
    { id: 4, label: 'Custom Loans', amount: 'Choose Money', icon: customIcon, color: 'bg-[#DCFAF8]' },
  ];

  const StatCard = ({ data }) => (
    <div className="flex items-center gap-4 p-4 bg-white border border-[#F3F3F3] rounded-[25px] shrink-0 snap-start">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${data.color}`}>
        <img src={data.icon} alt={data.label} className="w-5 h-5 object-contain" />
      </div>

      <div className="flex flex-col">
        <span className="text-[#718EBF] text-xs leading-tight">
          {data.label}
        </span>
        <span className="text-[#232323] text-sm font-bold">
          {data.amount}
        </span>
      </div>
    </div>
  );

  return (
    <div className="mb-8 font-inter">
      {/* Mobile View */}
      <div className="flex gap-4 pb-2 overflow-x-auto lg:hidden no-scrollbar snap-x snap-mandatory">
        {loanData.map((item) => (
          <StatCard key={item.id} data={item} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden grid-cols-4 gap-4 lg:grid">
        {loanData.map((item) => (
          <StatCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LoanStats;