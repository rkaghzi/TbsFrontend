// src/pages/LostItemsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../BusManager/LostItemDetailsPage.css'; 

const LostItemsPage = () => {
    const [lostItems, setLostItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLostItems = async () => {
            try {
                const response = await axios.get('/api/lostitems');
                setLostItems(response.data);
            } catch (error) {
                console.error("Error fetching lost items", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLostItems();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/lostitems/delete/${id}`);
            setLostItems(lostItems.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting item", error);
        }
    };

    return (
        <div className="lost-items-page">
            <h1>Lost Items</h1>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="lost-items-list">
                    {lostItems.length === 0 ? (
                        <p>No lost items found.</p>
                    ) : (
                        lostItems.map(item => (
                            <div className="lost-item" key={item._id}>
                                <h3>{item.itemName}</h3>
                                <p>{item.description}</p>
                                <p><strong>Status:</strong> {item.status}</p>
                                <p><strong>Location Found:</strong> {item.locationFound}</p>
                                <button onClick={() => handleDelete(item._id)} className="delete-btn">
                                    Delete
                                </button>
                                <Link to={`/lostitems/${item._id}`} className="view-details-btn">View Details</Link>
                            </div>
                        ))
                    )}
                </div>
            )}
            <Link to="/add-lost-item" className="add-item-btn">Add Lost Item</Link>
        </div>
    );
};

export default LostItemsPage;
