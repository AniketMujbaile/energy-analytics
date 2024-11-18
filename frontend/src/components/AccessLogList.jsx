import React, { useState, useEffect } from 'react';
import { fetchAccessLogs } from '../services/api';
import Loader from './Loader';

const AccessLogList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const response = await fetchAccessLogs();
        setLogs(response.data);
      } catch (error) {
        console.error('Error loading access logs:', error);
      } finally {
        setLoading(false);
      }
    };
    loadLogs();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Access Logs</h3>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            {logs.map((log) => (
              <li key={log._id} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{log.employee_name}</h3>
                      <p className="text-sm text-gray-500">{new Date(log.access_date).toLocaleDateString()}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Time: {log.access_time} | Mode: {log.algo_status ? 'ON' : 'OFF'}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccessLogList;