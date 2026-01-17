import React from 'react';
import LoanStats from '../components/loans/LoanStats';
import LoanTable from '../components/loans/LoanTable';

const Loans = () => {
  return (
    <div className="p-6 lg:p-2 bg-[#F5F7FA] min-h-screen px-2 lg:px-4 py-2 lg:py-4">
      <div className="max-w-[1200px] mx-auto">
        <LoanStats />
        <h3 className="text-lg lg:text-[22px] font-bold text-[#343C6A] mb-2 p-2">Active Loans Overview</h3>
        <LoanTable />
      </div>
    </div>
  );
};

export default Loans;