import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getIPOs } from '../utils/ipoStorage';
import './AddIPO.css';

function IPODetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipoId = parseInt(id);
  const [ipo, setIPO] = useState(null);

  useEffect(() => {
    const ipoList = getIPOs();
    const found = ipoList.find((item) => item.id === ipoId);
    if (found) {
      setIPO(found);
    } else {
      alert('IPO not found!');
      navigate('/');
    }
  }, [ipoId, navigate]);

  if (!ipo) return null;

  return (
    <div className="add-ipo-container">
      <h2>IPO Details</h2>
      <div className="ipo-details">
        <p><strong>Company:</strong> {ipo.name}</p>
        <p><strong>Date:</strong> {ipo.date}</p>
        <p><strong>Price:</strong> ₹{ipo.price}</p>
        <p><strong>Status:</strong> {ipo.status}</p>
        <Link to="/">
          <button style={{ marginTop: '20px' }}>Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default IPODetails;
