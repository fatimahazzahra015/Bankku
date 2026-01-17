import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Loans from './pages/Loans';
import Settings from './pages/Settings';
import MaintenancePage from './pages/MaintenancePage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#F5F7FA]">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Wrapper */}
        <div className="flex-1 lg:ml-[230px] w-full">
          <div className="mx-auto w-full max-w-[1440px]">
            <Header setIsSidebarOpen={setIsSidebarOpen} />
            <main className="md:p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/transactions" element={<MaintenancePage pageName="Transactions" />} />
                <Route path="/accounts" element={<MaintenancePage pageName="Accounts" />} />
                <Route path="/investments" element={<MaintenancePage pageName="Investments" />} />
                <Route path="/credit-cards" element={<MaintenancePage pageName="Credit Cards" />} />
                <Route path="/services" element={<MaintenancePage pageName="Services" />} />
                <Route path="/privileges" element={<MaintenancePage pageName="My Privileges" />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;