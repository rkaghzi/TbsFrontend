// src/components/CheckInForm.js
import React, { useState } from 'react';

const CheckInForm = ({ handleSubmit, initialValues = {} }) => {
    const [passengerName, setPassengerName] = useState(initialValues.passengerName || '');
    const [passengerContact, setPassengerContact] = useState(initialValues.passengerContact || '');
    const [ticketNumber, setTicketNumber] = useState(initialValues.ticketNumber || '');
    const [bus, setBus] = useState(initialValues.bus || '');
    const [route, setRoute] = useState(initialValues.route || '');
    const [status, setStatus] = useState(initialValues.status || 'Pending');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({ passengerName, passengerContact, ticketNumber, bus, route, status });
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} placeholder="Passenger Name" required />
            <input type="text" value={passengerContact} onChange={(e) => setPassengerContact(e.target.value)} placeholder="Contact Info" required />
            <input type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Ticket Number" required />
            <input type="text" value={bus} onChange={(e) => setBus(e.target.value)} placeholder="Bus Number" required />
            <input type="text" value={route} onChange={(e) => setRoute(e.target.value)} placeholder="Route" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CheckInForm;
