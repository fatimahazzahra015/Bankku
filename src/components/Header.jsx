import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import profile from '../asset/pict.jpg';

const Header = ({ setIsSidebarOpen }) => {
  const location = useLocation();

  const pageTitles = {
    '/': 'Overview',
    '/transactions': 'Transactions',
    '/accounts': 'Accounts',
    '/investments': 'Investments',
    '/credit-cards': 'Credit Cards',
    '/loans': 'Loans',
    '/services': 'Services',
    '/privileges': 'My Privileges',
    '/settings': 'Setting',
  };

  const currentTitle = pageTitles[location.pathname] || 'Bankku';

  return (
    <div className="bg-white flex flex-col border-b border-[#F3F3F3] sticky top-0 z-40 font-inter">
      <header className="h-[70px] lg:h-[100px] px-6 lg:px-10 flex justify-between items-center">
        
        {/* Left Side: Mobile Menu & Title */}
        <div className="flex items-center gap-4">
          <button 
            type="button"
            className="lg:hidden p-2 text-[#343C6A] hover:opacity-70 transition-opacity" 
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open Sidebar"
          >
            <MenuIcon />
          </button>
          <h2 className="text-xl lg:text-[28px] font-semibold text-[#343C6A]">
            {currentTitle}
          </h2>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="flex items-center gap-3 lg:gap-7">
          
          {/* Desktop Search Bar */}
          <div className="relative hidden md:block">
            <SearchInput width="w-40 xl:w-[255px]" rounded="rounded-full" />
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-7">
            <IconButton to="/settings" icon="asset/settings.png" alt="Settings" />
            <IconButton icon="asset/notification.png" alt="Notifications" hasBadge />
          </div>

          {/* Profile Picture */}
          <div className="ml-1 lg:ml-2 cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src={profile}
              alt="Profile"
              className="w-9 h-9 lg:w-[60px] lg:h-[60px] rounded-full object-cover border border-[#F3F3F3]" 
            />
          </div>
        </div>
      </header>

      {/* Mobile Search Bar Section */}
      <div className="px-6 pb-4 md:hidden">
        <SearchInput width="w-full" rounded="rounded-[15px]" />
      </div>
    </div>
  );
};

const SearchInput = ({ width, rounded }) => (
  <div className={`relative ${width}`}>
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <img src="asset/find.png" alt="" className="w-5 h-5 object-contain opacity-60" />
    </div>
    <input 
      type="text" 
      placeholder="Search for something" 
      className={`bg-[#F5F7FA] ${rounded} py-3 px-12 w-full outline-none text-[#8BA3CB] text-[13px] focus:ring-1 focus:ring-gray-200 transition-all`}
    />
  </div>
);

const IconButton = ({ to, icon, alt, hasBadge }) => {
  const content = (
    <button className="p-3 bg-[#F5F7FA] rounded-full hover:bg-gray-100 transition-colors relative">
      <img src={icon} alt={alt} className="w-6 h-6 object-contain" />
      {hasBadge && (
        <span className="absolute top-2.5 right-3 w-2.5 h-2.5 bg-[#FE5C73] rounded-full border-2 border-white"></span>
      )}
    </button>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export default Header;