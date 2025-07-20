import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getIPOs, updateIPO } from '../utils/ipoStorage';
import './AddIPO.css';

function EditIPO() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipoId = parseInt(id);

  const [form, setForm] = useState({
    name: '',
    date: '',
    price: '',
    status: 'Upcoming',
  });

  useEffect(() => {
    const ipoList = getIPOs();
    const ipoToEdit = ipoList.find((ipo) => ipo.id === ipoId);
    if (ipoToEdit) {
      setForm({
        name: ipoToEdit.name,
        date: ipoToEdit.date,
        price: ipoToEdit.price,
        status: ipoToEdit.status,
      });
    } else {
      alert('IPO not found!');
      navigate('/');
    }
  }, [ipoId, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateIPO(ipoId, form);
    alert('IPO Updated Successfully!');
    navigate('/');
  };

  return (
    <div className="add-ipo-container">
      <h2>Edit IPO</h2>
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

        <button type="submit">Update IPO</button>
      </form>
    </div>
  );
}

export default EditIPO;
