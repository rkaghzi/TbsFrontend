import React, { useState } from 'react';
import axios from 'axios';
import CheckInForm from '../../components/BusManager/Passenger Check-Ins/CheckInForm';
import '../BusManager/CreateCheckInPage.css';

const CreateCheckInPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (checkInData) => {
        setLoading(true);

        try {
            await axios.post('/api/checkins/create', checkInData);
            alert('Check-in created successfully');
        } catch (error) {
            console.error('Error creating check-in', error);
            alert('Error creating check-in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-check-in">
            <h2>Create New Check-In</h2>
            <CheckInForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default CreateCheckInPage;
