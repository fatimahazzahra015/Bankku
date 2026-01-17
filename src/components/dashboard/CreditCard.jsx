import React from 'react';

const CreditCard = ({ 
  variant = 'dark', 
  balance = "0", 
  holder = "Name", 
  validThru = "00/00", 
  cardNumber = "0000 **** **** 0000" 
}) => {
  const isDark = variant === 'dark';

  const theme = {
    container: isDark 
      ? 'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white' 
      : 'bg-white border border-[#DFEAF2] text-[#343C6A]',
    label: isDark ? 'opacity-70' : 'text-[#718EBF]',
    footer: isDark ? 'bg-white/15' : 'border-t border-[#DFEAF2]',
    logo: isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'
  };

  return (
    <div className={`font-lato shrink-0 lg:shrink w-[280px] md:w-[390px] h-[170px] lg:h-[250px] rounded-[20px] lg:rounded-[25px] flex flex-col justify-between overflow-hidden shadow-sm transition-all ${theme.container}`}>
      
      {/* Header*/}
      <div className="p-4 lg:p-6 flex justify-between items-start">
        <header>
          <p className={`text-[10px] lg:text-[12px] font-normal ${theme.label}`}>
            Balance
          </p>
          <p className="text-[16px] lg:text-[20px] font-semibold mt-1">
            ${balance}
          </p>
        </header>
        <img 
          src={isDark ? "/asset/Chip_Card.png" : "../asset/Chip_Card solid.png"}
          className="w-7 lg:w-9 object-contain" 
          alt="chip" 
        />
      </div>

      {/* Main Info*/}
      <div className="px-4 lg:px-6 flex gap-8 lg:gap-12">
        <section>
          <p className={`text-[8px] lg:text-[10px] uppercase ${theme.label}`}>
            Card Holder
          </p>
          <p className="text-[12px] lg:text-[15px] font-semibold mt-1">
            {holder}
          </p>
        </section>
        <section>
          <p className={`text-[8px] lg:text-[10px] uppercase ${theme.label}`}>
            Valid Thru
          </p>
          <p className="text-[12px] lg:text-[15px] font-semibold mt-1">
            {validThru}
          </p>
        </section>
      </div>

      {/* Footer*/}
      <footer className={`px-4 lg:px-6 py-3 lg:py-3 flex justify-between items-center ${theme.footer}`}>
        <p className="text-[10px] lg:text-[18px] font-semibold tracking-[2px]">
          {cardNumber}
        </p>
        <div className="flex -space-x-3">
          <div className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full ${theme.logo} blur-[1px]`} />
          <div className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full ${theme.logo} blur-[1px]`} />
        </div>
      </footer>
    </div>
  );
};

export default CreditCard;