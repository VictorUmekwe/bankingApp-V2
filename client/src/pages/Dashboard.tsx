import { Menu, LogOut, Home, Settings, User } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 md:block`}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <Home size={20} />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <User size={20} />
            Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            <Settings size={20} />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-300"
          >
            <LogOut size={20} />
            Logout
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:ml-64">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md md:shadow-none border-b border-gray-200 dark:border-gray-700">
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Welcome Back 👋
          </h1>
        </header>

        {/* Content Area */}
        <main className="p-6 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Dashboard Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Total Users
              </h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">1,250</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Revenue
              </h3>
              <p className="text-3xl font-bold mt-2 text-green-600">$32,400</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Active Sessions
              </h3>
              <p className="text-3xl font-bold mt-2 text-purple-600">368</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
