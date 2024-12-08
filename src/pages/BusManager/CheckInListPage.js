// src/pages/CheckInListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckInItem from '../../components/BusManager/Passenger Check-Ins/CheckIn';
import '../BusManager/CheckInListPage.css';

const CheckInListPage = () => {
    const [checkIns, setCheckIns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCheckIns = async () => {
            try {
                const response = await axios.get('/api/checkins');
                setCheckIns(response.data);
            } catch (error) {
                console.error('Error fetching check-ins', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCheckIns();
    }, []);

    const handleDelete = async (ticketNumber) => {
        try {
            await axios.delete(`/api/checkins/delete/${ticketNumber}`);
            alert('Check-in deleted');
            setCheckIns(checkIns.filter((checkIn) => checkIn.ticketNumber !== ticketNumber));
        } catch (error) {
            console.error('Error deleting check-in', error);
        }
    };

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="check-in-list">
            <h2>Check-Ins</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ticket Number</th>
                        <th>Passenger Name</th>
                        <th>Bus</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {checkIns.map((checkIn) => (
                        <CheckInItem key={checkIn.ticketNumber} checkIn={checkIn} handleDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CheckInListPage;
