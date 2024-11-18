import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchChartData } from '../services/api';
import Loader from './Loader';

const EnergyChart = ({ dateRange, algoStatus }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchChartData(dateRange, algoStatus);
        setData(result.data);
      } catch (error) {
        console.error('Error loading chart data:', error);
      }
      setLoading(false);
    };
    loadData();
  }, [dateRange, algoStatus]);

  if (loading) return <Loader />;

  return (
    <div className="w-full h-96 bg-white p-4 rounded-lg shadow-lg">
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="total_kwh" 
          fill="#3B82F6" 
          name="Energy Consumed (kWh)"
        />
      </BarChart>
    </div>
  );
};

export default EnergyChart;