import React, { useState } from 'react';
import loans from '../../asset/loans.png';

const LoanTable = () => {
  const [loans, setLoans] = useState([
    { id: '01.', money: 100000, left: 40500, duration: '8 Months', rate: '12%', installment: 2000 },
    { id: '02.', money: 500000, left: 250000, duration: '36 Months', rate: '10%', installment: 8000 },
    { id: '03.', money: 900000, left: 40500, duration: '12 Months', rate: '12%', installment: 5000 },
    { id: '04.', money: 50000, left: 40500, duration: '25 Months', rate: '5%', installment: 2000 },
    { id: '05.', money: 50000, left: 40500, duration: '5 Months', rate: '16%', installment: 10000 },
    { id: '06.', money: 80000, left: 25500, duration: '14 Months', rate: '8%', installment: 2000 },
    { id: '07.', money: 12000, left: 5500, duration: '9 Months', rate: '13%', installment: 500 },
    { id: '08.', money: 160000, left: 100800, duration: '3 Months', rate: '12%', installment: 900 },
  ]);

  const [selectedLoan, setSelectedLoan] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [status, setStatus] = useState('idle');

  const formatCurrency = (val) => `$${Number(val).toLocaleString()}`;

  const activeLoans = loans.filter(loan => loan.left > 0);
  const totals = {
    money: activeLoans.reduce((acc, curr) => acc + curr.money, 0),
    left: loans.reduce((acc, curr) => acc + curr.left, 0),
    installment: activeLoans.reduce((acc, curr) => acc + curr.installment, 0)
  };

  // --- Handlers ---
  const handleOpenModal = (loan) => {
    setSelectedLoan(loan);
    setPaymentAmount("");
    setStatus('idle');
  };

  const handleProcessPayment = () => {
    const amount = parseFloat(paymentAmount);
    
    if (isNaN(amount) || amount <= 0) return alert("Please enter a valid amount");
    if (amount > selectedLoan.left) return alert("Payment exceeds balance!");

    setStatus('loading');

    setTimeout(() => {
      setLoans(prev => prev.map(l => 
        l.id === selectedLoan.id ? { ...l, left: l.left - amount } : l
      ));
      setStatus('success');
    }, 500);
  };

  return (
    <div className="bg-white rounded-[25px] p-5 lg:p-6 shadow-sm border border-[#F3F3F3] font-inter">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#718EBF] font-medium border-b border-[#E6EFF5] text-sm lg:text-base">
              <th className="pb-4 font-normal">SL No</th>
              <th className="pb-4 font-normal">Loan Money</th>
              <th className="pb-4 font-normal">Left to repay</th>
              <th className="pb-4 font-normal hidden lg:table-cell">Duration</th>
              <th className="pb-4 font-normal hidden lg:table-cell">Interest rate</th>
              <th className="pb-4 font-normal hidden lg:table-cell">Installment</th>
              <th className="pb-4 font-normal text-right lg:text-left">Repay</th>
            </tr>
          </thead>
          <tbody className="text-[#232323] text-sm lg:text-base">
            {loans.map((loan) => (
              <tr key={loan.id} className="border-b border-[#F3F3F3] last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 lg:py-5">{loan.id}</td>
                <td className="py-4 lg:py-5">{formatCurrency(loan.money)}</td>
                <td className="py-4 lg:py-5">{formatCurrency(loan.left)}</td>
                <td className="py-4 lg:py-5 hidden lg:table-cell">{loan.duration}</td>
                <td className="py-4 lg:py-5 hidden lg:table-cell">{loan.rate}</td>
                <td className="py-4 lg:py-5 hidden lg:table-cell">{formatCurrency(loan.installment)} / month</td>
                <td className="py-4 lg:py-5 text-right lg:text-left">
                  {loan.left <= 0 ? (
                    <span className="text-[#2DAB6D] font-bold px-2">Paid Off</span>
                  ) : (
                    <button 
                      onClick={() => handleOpenModal(loan)}
                      className="px-4 py-1.5 lg:px-6 border border-[#121417] rounded-full hover:border-[#1814F3] hover:text-[#1814F3] transition-all font-medium"
                    >
                      Repay
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {/* Footer Total */}
            <tr className="text-[#FE5C73] font-bold">
              <td className="py-6 uppercase">Total</td>
              <td className="py-6">{formatCurrency(totals.money)}</td>
              <td className="py-6">{formatCurrency(totals.left)}</td>
              <td className="hidden lg:table-cell"></td>
              <td className="hidden lg:table-cell"></td>
              <td className="py-6 hidden lg:table-cell">{formatCurrency(totals.installment)} / month</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {selectedLoan && (
        <PaymentModal 
          loan={selectedLoan}
          status={status}
          amount={paymentAmount}
          setAmount={setPaymentAmount}
          onClose={() => setSelectedLoan(null)}
          onConfirm={handleProcessPayment}
          formatCurrency={formatCurrency}
        />
      )}
    </div>
  );
};

const PaymentModal = ({ loan, status, amount, setAmount, onClose, onConfirm, formatCurrency }) => {
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[30px] p-8 w-full max-w-sm text-center shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-500 ${isSuccess ? 'bg-[#E7F7EF] text-[#2DAB6D]' : 'bg-[#EDF1F7] text-[#1A16F3]'}`}>
          {isLoading ? (
            <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-[#1A16F3] rounded-full" />
          ) : isSuccess ? (
            <CheckIcon />
          ) : (
            <img src={loans} alt="Loan Icon" className="w-8 h-8 object-contain" />
          )}
        </div>

        <h4 className="text-[#343C6A] text-xl font-bold mb-1">
          {isLoading ? "Processing..." : isSuccess ? "Repayment Success!" : "Repay Loan"}
        </h4>
        <p className="text-[#718EBF] text-xs mb-6 font-medium">SL No: {loan.id}</p>

        <div className="bg-[#F5F7FA] rounded-[20px] p-5 mb-6 text-left border border-gray-50">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[#718EBF] text-[10px] uppercase font-bold tracking-wider">
               {isSuccess ? "Amount Paid" : "Remaining Balance"}
            </p>
            {isSuccess && <span className="text-[#2DAB6D] text-[10px] font-bold px-2 py-0.5 bg-white rounded shadow-sm">SUCCESS</span>}
          </div>
          
          <p className="text-xl font-bold text-[#232323]">
            {isSuccess ? formatCurrency(amount) : formatCurrency(loan.left)}
          </p>

          {!isSuccess && !isLoading && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-[#718EBF] text-[10px] uppercase font-bold mb-2">Input Payment</p>
              <div className="flex items-center h-[48px] bg-white rounded-xl border border-[#DFEAF2] px-4">
                <span className="text-[#718EBF] font-semibold mr-1">$</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-transparent outline-none text-[#232323] font-bold text-sm"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button 
            onClick={isSuccess ? onClose : onConfirm}
            disabled={isLoading}
            className={`w-full py-3.5 rounded-2xl font-bold transition-all shadow-md active:scale-95 ${
              isSuccess ? 'bg-[#2DAB6D] text-white' : 'bg-[#1A16F3] text-white disabled:opacity-70'
            }`}
          >
            {isLoading ? "Processing..." : isSuccess ? "Done" : "Confirm Payment"}
          </button>
          
          {!isSuccess && !isLoading && (
            <button onClick={onClose} className="w-full py-2 text-[#718EBF] text-sm font-semibold">
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
  </svg>
);

export default LoanTable;