import React, { useState, useEffect } from 'react';
import { getIPOs, deleteIPO } from '../utils/ipoStorage';
import './IPOList.css';
import { Link } from 'react-router-dom';
import IPOSummary from '../components/IPOSummary';


function IPOList() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [ipoList, setIpoList] = useState([]);

  useEffect(() => {
    setIpoList(getIPOs());
  }, []);

  const filteredIPOs = selectedStatus === "All"
    ? ipoList
    : ipoList.filter((ipo) => ipo.status === selectedStatus);


    
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this IPO?");
    if (confirmDelete) {
      deleteIPO(id);
      setIpoList(getIPOs());
    }
  };

  return (
    <div className="ipo-table-container">
      <h2>IPO Listings</h2>

      <div style={{ marginBottom: '15px' }}>
        {["All", "Upcoming", "Open", "Closed"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: selectedStatus === status ? '#343a40' : '#e0e0e0',
              color: selectedStatus === status ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {status}
          </button>
        ))}
      </div>
        <IPOSummary />
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Company</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredIPOs.map((ipo, index) => (
            <tr key={index}>
              <td>
                <Link to={`/ipo/${ipo.id}`}>
                  <button style={{ padding: '5px 10px' }}>View Details</button>
                </Link>


                <Link to={`/edit/${ipo.id}`}>
                  <button style={{ padding: '5px 10px', marginLeft: '5px', backgroundColor: 'orange', color: 'white' }}>
                    Edit
                  </button>
                </Link>
                
                <button 
                  style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white' }} 
                  onClick={() => handleDelete(ipo.id)}
                >       
                  Delete
                </button>
              </td>
              <td>{ipo.name}</td>
              <td>{ipo.date}</td>
              <td>{ipo.price}</td>
              <td>{ipo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOList;
