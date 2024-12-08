import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DailyLogDetailsPage.css';

const DailyLogDetailsPage = () => {
  const { id } = useParams();
  const [log, setLog] = useState(null);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await fetch(`/api/daily-log/${id}`);
        const data = await response.json();
        if (response.ok) {
          setLog(data);
        } else {
          console.error('Error fetching log:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLog();
  }, [id]);

  return (
    <div className="daily-log-details">
      {log ? (
        <>
          <h2>Daily Log Details</h2>
          <p><strong>Date:</strong> {new Date(log.date).toLocaleDateString()}</p>
          <p><strong>Bus:</strong> {log.bus.busNumber}</p>
          <p><strong>Driver:</strong> {log.driver.name}</p>
          <p><strong>Route:</strong> {log.route}</p>
          <p><strong>Operations Summary:</strong> {log.operationsSummary}</p>
          <p><strong>Issues Reported:</strong> {log.issuesReported}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DailyLogDetailsPage;
