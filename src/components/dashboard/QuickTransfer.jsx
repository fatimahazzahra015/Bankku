import React, { useRef, useState } from 'react';
import liviaImg from '../../asset/livia.png';
import randyImg from '../../asset/randy.png';
import workmanImg from '../../asset/workman.png';
import sendIcon from '../../asset/send.png';

const QuickTransfer = () => {
  const scrollRef = useRef(null);
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [transactionDate, setTransactionDate] = useState("");

  const users = [
    { id: 1, name: "Livia Bator", role: "CEO", image: liviaImg },
    { id: 2, name: "Randy Press", role: "Director", image: randyImg },
    { id: 3, name: "Workman", role: "Designer", image: workmanImg },
  ];

  const handleScroll = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const handleSendTransfer = () => {
    if (!selectedUser) return alert("Select the recipient first!");
    if (!amount || amount <= 0) return alert("Enter a valid amount!");
    
    setLoading(true);
    
    setTimeout(() => {
      const now = new Date();
      const formattedDate = now.toLocaleString('id-ID', { 
        dateStyle: 'medium', 
        timeStyle: 'short' 
      });

      setTransactionDate(formattedDate);
      setLoading(false);
      setShowPopup(true);
    }, 500);
  };

  return (
    <div className="w-full font-inter relative">
      <h3 className="text-[22px] font-semibold text-[#343C6A] mb-5">
        Quick Transfer
      </h3>
      
      <div className="bg-white rounded-[25px] p-6 lg:p-8 h-[280px] border border-[#DFEAF2] flex flex-col justify-between shadow-sm">
        
        {/* User Selection List */}
        <div className="relative flex items-center">
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar py-2 px-2 pr-16 scroll-smooth"
          >
            {users.map((user) => (
              <div 
                key={user.id} 
                onClick={() => setSelectedUser(user)}
                className={`flex flex-col items-center text-center shrink-0 min-w-[80px] cursor-pointer transition-all duration-300 
                  ${selectedUser?.id === user.id ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] mb-3 rounded-full overflow-hidden border-2 transition-all 
                  ${selectedUser?.id === user.id ? 'border-[#1A16F3] shadow-md' : 'border-transparent bg-gray-100'}`}>
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                </div>
                
                <div className={`text-[12px] lg:text-[16px] leading-tight text-[#232323] transition-all 
                  ${selectedUser?.id === user.id ? "font-extrabold" : "font-normal"}`}>
                  {user.name}
                </div>
                <div className={`text-[11px] lg:text-[15px] mt-1 text-[#718EBF] transition-all
                  ${selectedUser?.id === user.id ? "font-bold" : "font-normal"}`}>
                  {user.role}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button 
              onClick={handleScroll} 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#718EBF] border border-gray-50 hover:bg-gray-50 active:scale-90 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Input and Send Section */}
        <div className="flex items-center gap-3 lg:gap-6 mt-4">
          <div className="text-[#718EBF] text-[12px] xl:text-[16px] whitespace-nowrap font-medium block lg:hidden xl:block">
            Write Amount
          </div>
          
          <div className="relative flex-1 flex items-center h-[50px] bg-[#EDF1F7] rounded-full overflow-hidden">
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="525.50"
              className="w-full h-full bg-transparent pl-6 pr-[110px] lg:pr-[140px] outline-none text-[#232323] font-semibold text-[14px] lg:text-[16px]"
            />
            
            <button 
              onClick={handleSendTransfer}
              disabled={loading}
              className={`absolute right-0 top-0 h-full px-5 lg:px-8 text-white rounded-full flex items-center justify-center gap-2 lg:gap-3 transition-all active:scale-95 
                ${loading ? 'bg-[#718EBF] cursor-not-allowed' : 'bg-[#1814F3] hover:bg-[#2D2AE5]'}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span className="text-[14px] lg:text-[16px] font-bold">Send</span>
                  <img src={sendIcon} alt="Send" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[30px] p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h4 className="text-[#343C6A] text-xl font-bold mb-1">Transfer Completed!</h4>
            <p className="text-[#718EBF] text-sm mb-6">{transactionDate}</p>

            <div className="bg-[#F5F7FA] rounded-2xl p-4 mb-6 flex items-center gap-4 text-left">
              <img src={selectedUser?.image} className="w-12 h-12 rounded-full object-cover" alt="" />
              <div>
                <p className="font-bold text-[#232323]">{selectedUser?.name}</p>
                <p className="text-xs text-[#718EBF]">{selectedUser?.role}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-bold text-[#1A16F3]">${amount}</p>
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Success</p>
              </div>
            </div>

            <button 
              onClick={() => setShowPopup(false)}
              className="w-full py-3 bg-[#1A16F3] text-white rounded-xl font-bold hover:bg-[#2D2AE5] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickTransfer;