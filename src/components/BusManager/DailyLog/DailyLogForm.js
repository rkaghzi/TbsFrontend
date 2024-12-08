import React, { useState } from 'react';
import './DailyLogForm.css';

const DailyLogForm = ({ onLogCreated }) => {
  const [date, setDate] = useState('');
  const [bus, setBus] = useState('');
  const [driver, setDriver] = useState('');
  const [route, setRoute] = useState('');
  const [operationsSummary, setOperationsSummary] = useState('');
  const [issuesReported, setIssuesReported] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const logData = {
      date,
      bus,
      driver,
      route,
      operationsSummary,
      issuesReported,
    };

    try {
      const response = await fetch('/api/daily-log/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });

      const data = await response.json();
      if (response.ok) {
        onLogCreated(data.newLog);
      } else {
        console.error('Error creating log:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="daily-log-form">
      <h2>Create Daily Log</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Bus:</label>
        <input
          type="text"
          value={bus}
          onChange={(e) => setBus(e.target.value)}
          required
        />
        <label>Driver:</label>
        <input
          type="text"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
          required
        />
        <label>Route:</label>
        <input
          type="text"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          required
        />
        <label>Operations Summary:</label>
        <textarea
          value={operationsSummary}
          onChange={(e) => setOperationsSummary(e.target.value)}
          required
        />
        <label>Issues Reported:</label>
        <textarea
          value={issuesReported}
          onChange={(e) => setIssuesReported(e.target.value)}
        />
        <button type="submit">Create Log</button>
      </form>
    </div>
  );
};

export default DailyLogForm;
