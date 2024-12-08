import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DailyLogsPage.css';

const DailyLogsPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('/api/daily-log');
        const data = await response.json();
        if (response.ok) {
          setLogs(data);
        } else {
          console.error('Error fetching logs:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="daily-logs-page">
      <h2>Daily Logs</h2>
      <div className="logs-list">
        {logs.map((log) => (
          <div key={log._id} className="log-item">
            <Link to={`/logs/${log._id}`}>
              <h3>{log.date}</h3>
              <p>Bus: {log.bus.busNumber}</p>
              <p>Driver: {log.driver.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyLogsPage;
