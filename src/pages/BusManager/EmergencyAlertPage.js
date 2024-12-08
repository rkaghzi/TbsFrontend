import React from 'react';
import EmergencyAlertForm from '../../components/BusManager/EmergencyAlert/EmergencyALert';
import './EmergencyAlertPage.css';

const EmergencyAlertPage = () => {
  return (
    <div>
      <h1>Emergency Alert</h1>
      <div>
        <EmergencyAlertForm />
      </div>
    </div>
  );
};

export default EmergencyAlertPage;
