import React from 'react';
import CreditCard from './CreditCard';

const MyCardsSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 font-inter">
        <h3 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h3>
        <button className="text-[17px] font-semibold text-[#343C6A] hover:opacity-70 transition-opacity">
          See All
        </button>
      </div>

      <div className="flex flex-row gap-5 lg:gap-10 overflow-x-auto no-scrollbar pb-4">
        <CreditCard 
          variant="dark"
          balance="5,756"
          holder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
        />
        <CreditCard 
          variant="light"
          balance="5,756"
          holder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
        />
      </div>
    </div>
  );
};

export default MyCardsSection;