import React from 'react';
import MyCardsSection from '../components/dashboard/MyCardsSection';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import WeeklyActivity from '../components/dashboard/WeeklyActivity';
import ExpenseStatistics from '../components/dashboard/ExpenseStatistics';
import QuickTransfer from '../components/dashboard/QuickTransfer';
import BalanceHistory from '../components/dashboard/BalanceHistory';

const Dashboard = () => {
  return (
    <div className="space-y-8 lg:px-4 py-4 px-4 lg:py-4">
      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-8">
          <MyCardsSection />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <RecentTransactions />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <WeeklyActivity />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ExpenseStatistics />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 pb-10">
        <div className="col-span-12 lg:col-span-5">
          <QuickTransfer />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;