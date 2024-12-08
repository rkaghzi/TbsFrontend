import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../BusManager/DailyLogDetailsPage.css'; 

const LostItemDetailsPage = ({ match }) => {
    const { id } = match.params;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(`/api/lostitems/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error("Error fetching item details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="lost-item-details">
            {item ? (
                <>
                    <h2>{item.itemName}</h2>
                    <p><strong>Description:</strong> {item.description}</p>
                    <p><strong>Location Found:</strong> {item.locationFound}</p>
                    <p><strong>Status:</strong> {item.status}</p>
                    <p><strong>Claimant:</strong> {item.claimantName || 'Not claimed yet'}</p>
                    <p><strong>Contact Info:</strong> {item.contactInfo || 'Not available'}</p>
                    <button>Claim Item</button>
                    <a href="/">Go Back</a>
                </>
            ) : (
                <p>No details available for this item.</p>
            )}
        </div>
    );
};

export default LostItemDetailsPage;
