import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sat', Withdraw: 480, Deposit: 240 },
  { name: 'Sun', Withdraw: 350, Deposit: 130 },
  { name: 'Mon', Withdraw: 330, Deposit: 260 },
  { name: 'Tue', Withdraw: 480, Deposit: 370 },
  { name: 'Wed', Withdraw: 150, Deposit: 250 },
  { name: 'Thu', Withdraw: 390, Deposit: 240 },
  { name: 'Fri', Withdraw: 400, Deposit: 330 },
];

const WeeklyActivity = () => {
  return (
    <div className="w-full font-inter">
      <h3 className="text-[22px] font-semibold text-[#343C6A] mb-5">Weekly Activity</h3>
      <div className="bg-white rounded-[25px] p-8 h-[350px] shadow-sm border-none">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            barGap={10}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#F3F3F3" />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#718EBF', fontSize: 13}} 
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#718EBF', fontSize: 13}}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            
            <Tooltip 
              cursor={{fill: '#F3F3F3', opacity: 0.4}} 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0px 4px 15px rgba(0,0,0,0.08)' }}
            />
            
            <Legend 
              verticalAlign="top" 
              align="right" 
              iconType="circle" 
              iconSize={15}
              wrapperStyle={{ 
                paddingBottom: '20px', 
                fontSize: '15px', 
                color: '#718EBF' 
              }} 
              formatter={(value) => <span style={{ color: '#718EBF', marginRight: '10px' }}>{value}</span>}
            />

            <Bar 
              dataKey="Withdraw" 
              fill="#1814F3"
              radius={[10, 10, 10, 10]} 
              barSize={13} 
            />
            <Bar 
              dataKey="Deposit" 
              fill="#16DBCC"
              radius={[10, 10, 10, 10]} 
              barSize={13} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivity;