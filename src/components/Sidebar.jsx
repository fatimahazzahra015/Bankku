import React from 'react';
import { NavLink } from 'react-router-dom';
import logoIcon from '../asset/logo.png';
import dashboardIcon from '../asset/dashboard.png';
import transactionsIcon from '../asset/transactions.png';
import accountsIcon from '../asset/accounts.png';
import investmentIcon from '../asset/investment.png';
import creditCardIcon from '../asset/credit-card.png';
import loanIcon from '../asset/loans.png';
import servicesIcon from '../asset/services.png';
import privilegesIcon from '../asset/my privileges.png';
import settingsIcon from '../asset/settings solid.png';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon, path: '/' },
    { name: 'Transactions', icon: transactionsIcon, path: '/transactions' },
    { name: 'Accounts', icon: accountsIcon, path: '/accounts' },
    { name: 'Investments', icon: investmentIcon, path: '/investments' },
    { name: 'Credit Cards', icon: creditCardIcon, path: '/credit-cards' },
    { name: 'Loans', icon: loanIcon, path: '/loans' },
    { name: 'Services', icon: servicesIcon, path: '/services' },
    { name: 'My Privileges', icon: privilegesIcon, path: '/privileges' },
    { name: 'Setting', icon: settingsIcon, path: '/settings' },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-[#E6EFF5] z-50 transition-transform duration-300 w-[230px]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Brand Section */}
        <div className="p-8 flex items-center gap-3">
          <img src={logoIcon} alt="Bankku Logo" className="w-8 h-8 object-contain" />
          <h1 className="font-mont text-[22px] font-extrabold text-[#343C6A] tracking-tight">Bankku.</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-2 flex flex-col">
          {menuItems.map((item) => (
            <SidebarLink 
              key={item.name} 
              item={item} 
              onClose={() => setIsSidebarOpen(false)} 
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

const SidebarLink = ({ item, onClose }) => {
  const baseClasses = "relative group cursor-pointer flex items-center gap-5 px-8 py-4 transition-all duration-200";
  const activeClasses = "text-[#1A16F3]";
  const inactiveClasses = "text-[#B1B1B1] hover:text-[#1A16F3]";

  return (
    <NavLink 
      to={item.path}
      onClick={onClose}
      className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator Bar */}
          {isActive && (
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#1A16F3] rounded-r-lg animate-in slide-in-from-left-full duration-300" />
          )}
          <img 
            src={item.icon} 
            alt="" 
            className={`w-6 h-6 object-contain transition-all duration-200 
              ${isActive ? 'brightness-110' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`} 
          />
          
          <span className={`font-inter text-[16px] transition-all duration-200 ${isActive ? 'font-bold' : 'font-medium'}`}>
            {item.name}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default Sidebar;