import React from 'react';
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const EXPENSE_DATA = [
  { id: 0, value: 30, label: "Entertainment", color: "#343C6A" },
  { id: 1, value: 15, label: "Bill Expense", color: "#FC7900" },
  { id: 3, value: 35, label: "Others", color: "#396AFF" },
  { id: 2, value: 20, label: "Investment", color: "#FA00FF" },
];

const ExpenseStatistics = () => {
  const renderArcLabel = (item) => `${item.value}%\n${item.label}`;
  
  const chartConfigs = {
    series: [{
      data: EXPENSE_DATA,
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      outerRadius: "90%",
      cx: "50%",
      cy: "50%",
      paddingAngle: 5,
      cornerRadius: 8,
    }],
  };

  return (
    <div className="w-full font-inter">
      <h3 className="text-[22px] font-semibold text-[#343C6A] mb-5">
        Expense Statistics
      </h3>
      
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="w-full h-[320px] flex justify-center items-center">
          <PieChart
            series={chartConfigs.series}
            height={300}
            hideLegend
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;