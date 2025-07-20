import React from 'react';
import IPOList from '../components/IPOList';
import IPOChart from '../components/IPOChart';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div style={{ padding: '20px', width: '100%'}}>
      <h1>Welcome to the IPO Dashboard</h1>
      <Link to="/add">
        <button style={{ marginBottom: '20px', padding: '10px 20px' }}>Add New IPO</button>
      </Link>

      <IPOList />
      <IPOChart />
    </div>
  );
}

export default Dashboard;