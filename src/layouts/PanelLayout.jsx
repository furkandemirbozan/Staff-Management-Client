import React, { useState } from 'react';

import Sidebar from '../components/PanelLayoutComponents/Sidebar';
import Header from '../components/PanelLayoutComponents/Header';

import { Outlet } from 'react-router-dom';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">


            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <Outlet />
            </div>

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;