import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import EnergyChart from './EnergyChart';
import AccessLogForm from './AccessLogForm';
import AccessLogList from './AccessLogList';
import DateRangeFilter from './DateRangeFilter';

const Dashboard = () => {
  const { logout } = useAuth();
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [algoStatus, setAlgoStatus] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleLogSubmit = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Energy Analytics</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="ml-4 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-6">
                  <DateRangeFilter
                    dateRange={dateRange}
                    onDateRangeChange={setDateRange}
                    algoStatus={algoStatus}
                    onAlgoStatusChange={setAlgoStatus}
                  />
                </div>
                <EnergyChart
                  key={refreshKey}
                  dateRange={dateRange}
                  algoStatus={algoStatus}
                />
              </div>
            </div>
            <div>
              <AccessLogForm onSubmit={handleLogSubmit} />
              <div className="mt-6">
                <AccessLogList key={refreshKey} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;