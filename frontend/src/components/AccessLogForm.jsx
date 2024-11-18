import React, { useState } from 'react';
import { submitAccessLog } from '../services/api';

const AccessLogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    access_time: '',
    access_date: '',
    employee_name: '',
    algo_status: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitAccessLog(formData);
      onSubmit(formData);
      setFormData({
        access_time: '',
        access_date: '',
        employee_name: '',
        algo_status: ''
      });
    } catch (error) {
      console.error('Error submitting log:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Access Time
          <input
            type="time"
            value={formData.access_time}
            onChange={(e) => setFormData({...formData, access_time: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Access Date
          <input
            type="date"
            value={formData.access_date}
            onChange={(e) => setFormData({...formData, access_date: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Employee Name
          <input
            type="text"
            value={formData.employee_name}
            onChange={(e) => setFormData({...formData, employee_name: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Energy Saving Mode
          <select
            value={formData.algo_status}
            onChange={(e) => setFormData({...formData, algo_status: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select status</option>
            <option value="true">ON</option>
            <option value="false">OFF</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AccessLogForm;