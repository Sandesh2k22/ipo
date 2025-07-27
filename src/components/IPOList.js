import React, { useState, useEffect } from 'react';
import { getIPOs, deleteIPO } from '../utils/ipoStorage';
import './IPOList.css';
import { Link } from 'react-router-dom';

function IPOList() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [ipoList, setIpoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIPOs();
  }, []);

  const fetchIPOs = async () => {
    try {
      const data = await getIPOs();
      console.log("Fetched IPO Data:", data);
      setIpoList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching IPOs:", error);
      setIpoList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this IPO?");
    if (confirmDelete) {
      await deleteIPO(id);
      fetchIPOs();
    }
  };

  const filteredIPOs = selectedStatus === "All"
    ? ipoList
    : ipoList.filter((ipo) => ipo.status === selectedStatus);

  if (loading) {
    return <h3>Loading IPO data...</h3>;
  }

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

      {filteredIPOs.length === 0 ? (
        <p>No IPOs found. Add one using the "Add IPO" option.</p>
      ) : (
        <table className="ipo-table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Company</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredIPOs.map((ipo) => (
              <tr key={ipo.id}>
                <td>
                  <Link to={`/ipo/${ipo.id}`}>
                    <button style={{ padding: '5px 10px' }}>View</button>
                  </Link>
                  <Link to={`/edit/${ipo.id}`}>
                    <button style={{ padding: '5px 10px', marginLeft: '5px' }}>Edit</button>
                  </Link>
                  <button
                    style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', marginLeft: '5px' }}
                    onClick={() => handleDelete(ipo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>{ipo.name}</td>
                <td>{new Date(ipo.date).toLocaleDateString()}</td>
                <td>{ipo.price}</td>
                <td>{ipo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default IPOList;
