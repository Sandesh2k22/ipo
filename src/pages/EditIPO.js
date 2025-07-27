import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getIPOs, updateIPO } from '../utils/ipoStorage';
import './AddIPO.css';

function EditIPO() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    date: '',
    price: '',
    status: 'Upcoming',
  });

  useEffect(() => {
    const fetchIPO = async () => {
      try {
        const ipos = await getIPOs();
        const ipo = ipos.find((item) => item.id === parseInt(id));
        if (ipo) {
          setForm(ipo);
        } else {
          alert("IPO not found!");
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching IPO:", error);
      }
    };

    fetchIPO();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateIPO(id, form);
      alert('✅ IPO updated successfully!');
      navigate('/');
    } catch (error) {
      console.error("Error updating IPO:", error);
      alert('❌ Failed to update IPO.');
    }
  };

  return (
    <div className="add-ipo-container">
      <h2>Edit IPO</h2>
      <form onSubmit={handleSubmit} className="add-ipo-form">
        <label>Company Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Date</label>
        <input type="date" name="date" value={form.date.split('T')[0]} onChange={handleChange} required />

        <label>Price</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} required />

        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Upcoming">Upcoming</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>

        <button type="submit" style={{ marginTop: '15px', padding: '8px 16px' }}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditIPO;
