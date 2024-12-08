import React from 'react';
import { Link } from 'react-router-dom';

const CheckInItem = ({ checkIn, handleDelete }) => {
    return (
        <tr>
            <td>{checkIn.ticketNumber}</td>
            <td>{checkIn.passengerName}</td>
            <td>{checkIn.bus.busNumber}</td>
            <td>{checkIn.status}</td>
            <td>
                <Link to={`/checkin/${checkIn.ticketNumber}`}>View</Link>
                <Link to={`/update-checkin/${checkIn.ticketNumber}`}>Update</Link>
                <button onClick={() => handleDelete(checkIn.ticketNumber)}>Delete</button>
            </td>
        </tr>
    );
};

export default CheckInItem;
