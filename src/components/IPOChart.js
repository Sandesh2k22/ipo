

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getIPOs } from '../utils/ipoStorage';


ChartJS.register(ArcElement, Tooltip, Legend);

function IPOChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const ipoList = getIPOs();

    const statusCounts = {
      Upcoming: 0,
      Open: 0,
      Closed: 0,
    };

    ipoList.forEach((ipo) => {
      if (statusCounts[ipo.status] !== undefined) {
        statusCounts[ipo.status]++;
      }
    });

    setChartData({
      labels: ['Upcoming', 'Open', 'Closed'],
      datasets: [
        {
          data: [
            statusCounts.Upcoming,
            statusCounts.Open,
            statusCounts.Closed,
          ],
          backgroundColor: ['#007bff', '#28a745', '#dc3545'],
        },
      ],
    });
  }, []);

  if (!chartData) return null;

  return (
    <div style={{ width: '300px', marginTop: '20px' }}>
      <h3>IPO Status Overview</h3>
      <Pie data={chartData} />
    </div>
  );
}

export default IPOChart;
