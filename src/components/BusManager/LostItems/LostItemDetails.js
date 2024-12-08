import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LostItemDetails.css';

const LostItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/lost-items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching lost item details:', err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="lost-item-details">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h1>{item.itemName}</h1>
          <p>{item.description}</p>
          <p><strong>Date Found:</strong> {new Date(item.dateFound).toLocaleDateString()}</p>
          <p><strong>Location Found:</strong> {item.locationFound}</p>
          <p><strong>Status:</strong> {item.status}</p>
          <p><strong>Claimant Name:</strong> {item.claimantName || 'Not Claimed'}</p>
        </>
      )}
    </div>
  );
};

export default LostItemDetails;
