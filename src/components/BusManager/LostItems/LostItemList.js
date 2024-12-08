import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LostItemsList.css';

const LostItemsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/lost-items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching lost items:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="lost-items-list">
      <h1>Lost and Found Items</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="items">
          {items.map((item) => (
            <div className="item-card" key={item._id}>
              <h3>{item.itemName}</h3>
              <p>{item.description}</p>
              <p>Status: {item.status}</p>
              <Link to={`/lost-item/${item._id}`} className="btn-view">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LostItemsList;
