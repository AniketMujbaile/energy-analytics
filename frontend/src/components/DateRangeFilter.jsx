import React from 'react';

const DateRangeFilter = ({ dateRange, onDateRangeChange, algoStatus, onAlgoStatusChange }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={dateRange.startDate || ''}
          onChange={(e) => onDateRangeChange({ ...dateRange, startDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={dateRange.endDate || ''}
          onChange={(e) => onDateRangeChange({ ...dateRange, endDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Energy Saving Mode</label>
        <select
          value={algoStatus || ''}
          onChange={(e) => onAlgoStatusChange(e.target.value === '' ? null : e.target.value === 'true')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="true">ON</option>
          <option value="false">OFF</option>
        </select>
      </div>
    </div>
  );
};

export default DateRangeFilter;