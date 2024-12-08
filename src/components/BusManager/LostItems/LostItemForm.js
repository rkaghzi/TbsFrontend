import React, { useState } from 'react';
import './LostItemForm.css';

const LostItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [locationFound, setLocationFound] = useState('');
  const [bus, setBus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { itemName, description, locationFound, bus };

    try {
      const response = await fetch('/api/lost-items/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        alert('Lost item added successfully!');
      } else {
        alert('Error adding lost item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="lost-item-form">
      <h2>Add Lost Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location Found"
          value={locationFound}
          onChange={(e) => setLocationFound(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Bus Number"
          value={bus}
          onChange={(e) => setBus(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LostItemForm;
