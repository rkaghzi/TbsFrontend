import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AssignDriverForm.css';

const AssignDriverForm = () => {
    const [buses, setBuses] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [busId, setBusId] = useState('');
    const [driverId, setDriverId] = useState('');

    useEffect(() => {
        axios.get('/api/buses').then((res) => setBuses(res.data));
        axios.get('/api/drivers').then((res) => setDrivers(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/assign', { busId, driverId })
            .then((res) => {
                alert(res.data.message);
                setBusId('');
                setDriverId('');
            })
            .catch((err) => {
                alert(err.response.data.message || 'An error occurred');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Assign Driver to Bus</h3>
            <div>
                <label htmlFor="bus">Select Bus:</label>
                <select id="bus" value={busId} onChange={(e) => setBusId(e.target.value)} required>
                    <option value="">--Select Bus--</option>
                    {buses.map((bus) => (
                        <option key={bus._id} value={bus._id}>
                            {bus.busNumber}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="driver">Select Driver:</label>
                <select id="driver" value={driverId} onChange={(e) => setDriverId(e.target.value)} required>
                    <option value="">--Select Driver--</option>
                    {drivers.map((driver) => (
                        <option key={driver._id} value={driver._id}>
                            {driver.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Assign Driver</button>
        </form>
    );
};

export default AssignDriverForm;
