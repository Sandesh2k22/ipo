import React, { useEffect, useState } from 'react';
import { getIPOs } from '../utils/ipoStorage';
import './IPOSummary.css';

function IPOSummary() {
  const [summary, setSummary] = useState({
    total: 0,
    open: 0,
    upcoming: 0,
    closed: 0,
  });

  useEffect(() => {
    const data = getIPOs();
    setSummary({
      total: data.length,
      open: data.filter(ipo => ipo.status === 'Open').length,
      upcoming: data.filter(ipo => ipo.status === 'Upcoming').length,
      closed: data.filter(ipo => ipo.status === 'Closed').length,
    });
  }, []);

  return (
    <div className="ipo-summary">
      <h3>IPO Status Overview</h3>
      <div className="summary-box">
        <p><strong>Total IPOs:</strong> {summary.total}</p>
        <p><strong>Open:</strong> {summary.open}</p>
        <p><strong>Upcoming:</strong> {summary.upcoming}</p>
        <p><strong>Closed:</strong> {summary.closed}</p>
      </div>
    </div>
  );
}

export default IPOSummary;
