import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../BusManager/CheckInDetailPage.css';

const CheckInDetailPage = ({ match }) => {
    const { ticketNumber } = match.params;
    const [checkIn, setCheckIn] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCheckIn = async () => {
            try {
                const response = await axios.get(`/api/checkins/${ticketNumber}`);
                setCheckIn(response.data);
            } catch (error) {
                console.error('Error fetching check-in details', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCheckIn();
    }, [ticketNumber]);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="check-in-details">
            {checkIn ? (
                <>
                    <h2>{checkIn.passengerName}</h2>
                    <p><strong>Ticket Number:</strong> {checkIn.ticketNumber}</p>
                    <p><strong>Bus:</strong> {checkIn.bus.busNumber}</p>
                    <p><strong>Route:</strong> {checkIn.route}</p>
                    <p><strong>Status:</strong> {checkIn.status}</p>
                </>
            ) : (
                <p>No details available for this check-in.</p>
            )}
        </div>
    );
};

export default CheckInDetailPage;
