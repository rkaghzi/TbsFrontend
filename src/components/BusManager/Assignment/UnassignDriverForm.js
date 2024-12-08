import React, { useState } from 'react';
import axios from 'axios';
import './UnassignDriverForm.css';

const UnassignDriverForm = () => {
    const [assignmentId, setAssignmentId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`/api/unassign/${assignmentId}`)
            .then((res) => {
                alert(res.data.message);
                setAssignmentId('');
            })
            .catch((err) => {
                alert(err.response.data.message || 'An error occurred');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Unassign Driver from Bus</h3>
            <div>
                <label htmlFor="assignmentId">Assignment ID:</label>
                <input
                    type="text"
                    id="assignmentId"
                    value={assignmentId}
                    onChange={(e) => setAssignmentId(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Unassign Driver</button>
        </form>
    );
};

export default UnassignDriverForm;
