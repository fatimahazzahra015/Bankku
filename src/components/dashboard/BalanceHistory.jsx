import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

const HISTORY_DATA = [
  { name: 'Jul', balance: 150 }, { name: '', balance: 370 },
  { name: 'Aug', balance: 350 }, { name: '', balance: 280 },
  { name: 'Sep', balance: 500 }, { name: '', balance: 460 },
  { name: 'Oct', balance: 790 }, { name: '', balance: 300 },
  { name: 'Nov', balance: 200 }, { name: '', balance: 300 },
  { name: 'Dec', balance: 580 }, { name: '', balance: 350 },
  { name: 'Jan', balance: 220 }, { name: '', balance: 640 },
];

const BalanceHistory = () => {
  const chartColors = {
    stroke: "#1A16F3",
    fillGradient: "#2D60FF",
    grid: "#F3F3F3",
    text: "#718EBF"
  };

  return (
    <div className="w-full font-inter">
      <h3 className="text-[22px] font-semibold text-[#343C6A] mb-5">
        Balance History
      </h3>
      
      <div className="bg-white rounded-[25px] p-6 h-[276px] border border-[#DFEAF2]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={HISTORY_DATA} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors.fillGradient} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={chartColors.fillGradient} stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: chartColors.text, fontSize: 13 }} 
              dy={10}
              interval={1} 
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: chartColors.text, fontSize: 13 }} 
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]} 
            />
            
            <Tooltip />
            
            <Area 
              type="basis" 
              dataKey="balance" 
              stroke={chartColors.stroke} 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#balanceGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;