import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIPOs, addIPO } from '../utils/ipoStorage';
import './AddIPO.css'; 

function AddIPO() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    price: '',
    status: 'Upcoming',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIPO = {
      id: getIPOs().length + 1,
      ...form,
    };

    addIPO(newIPO);
    alert('IPO Added Successfully!');
    navigate('/');
  };

  return (
    <div className="add-ipo-container">
      <h2>Add New IPO</h2>
      <form onSubmit={handleSubmit} className="add-ipo-form">
        <label>Company Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />

        <label>Price</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} required />

        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Upcoming">Upcoming</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>

        <button type="submit">Add IPO</button>
      </form>
    </div>
  );
}

export default AddIPO;
