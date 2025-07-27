import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getIPOs } from '../utils/ipoStorage';

ChartJS.register(ArcElement, Tooltip, Legend);

function IPOChart() {
  const [ipoList, setIpoList] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchIPOs();
  }, []);

  const fetchIPOs = async () => {
    const data = await getIPOs();
    console.log("Fetched IPOs for Chart:", data);
    const ipoArray = Array.isArray(data) ? data : [];
    setIpoList(ipoArray);
    prepareChartData(ipoArray);
  };

  const prepareChartData = (ipos) => {
    const statusCounts = { Upcoming: 0, Open: 0, Closed: 0 };

    ipos.forEach((ipo) => {
      if (statusCounts[ipo.status] !== undefined) {
        statusCounts[ipo.status]++;
      }
    });

    setChartData({
      labels: ['Upcoming', 'Open', 'Closed'],
      datasets: [
        {
          data: [statusCounts.Upcoming, statusCounts.Open, statusCounts.Closed],
          backgroundColor: ['#007bff', '#28a745', '#dc3545'],
        },
      ],
    });
  };

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  if (chartData.datasets[0].data.every(val => val === 0)) {
    return <p>No IPO data available for chart.</p>;
  }

  return (
    <div style={{ width: '300px' }}>
      <h3>IPO Status Overview</h3>
      <Pie data={chartData} />
    </div>
  );
}

export default IPOChart;
