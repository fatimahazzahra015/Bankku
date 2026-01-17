import React from 'react';
import myCardIcon from '../../asset/my card.png';
import paypalIcon from '../../asset/paypal.png';
import jemiIcon from '../../asset/jemi.png';

const RecentTransactions = () => {
  const transactions = [
    { 
      id: 1, 
      title: "Deposit from my Card", 
      date: "28 January 2021", 
      amount: "-$850", 
      img: myCardIcon,
      bgColor: "bg-[#FFF5D9]", 
      isNegative: true 
    },
    { 
      id: 2, 
      title: "Deposit Paypal", 
      date: "25 January 2021", 
      amount: "+$2,500", 
      img: paypalIcon,
      bgColor: "bg-[#E7EDFF]", 
      isNegative: false 
    },
    { 
      id: 3, 
      title: "Jemi Wilson", 
      date: "21 January 2021", 
      amount: "+$5,400", 
      img: jemiIcon,
      bgColor: "bg-[#DCFAF8]", 
      isNegative: false 
    },
  ];

  return (
    <div className="w-full font-inter">
      <h3 className="text-[22px] font-semibold text-[#343C6A] mb-4 text-left">Recent Transaction</h3>
      
      <div className="bg-white rounded-[25px] p-5 h-[250px] border border-[#DFEAF2] flex flex-col justify-center gap-6 shadow-sm overflow-hidden">
        {transactions.map((item) => (
          <div key={item.id} className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4 flex-1 min-w-0 mr-2">
              <div className={`w-[50px] h-[50px] rounded-full flex shrink-0 items-center justify-center ${item.bgColor}`}>
                <img src={item.img} alt="" className="w-7 h-7 object-contain" />
              </div>
              <div className="flex flex-col min-w-0 overflow-hidden">
                <p className="text-[14px] lg:text-[16px] font-bold text-[#232323] truncate pr-2">
                  {item.title}
                </p>
                <p className="text-[12px] lg:text-[15px] text-[#718EBF] whitespace-nowrap">
                  {item.date}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className={`text-[15px] lg:text-[16px] font-bold whitespace-nowrap ${item.isNegative ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'}`}>
                {item.amount}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;