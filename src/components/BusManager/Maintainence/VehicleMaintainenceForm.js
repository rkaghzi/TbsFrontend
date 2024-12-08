import React, { useState } from 'react';
import './VehicleMaintainenceForm.css'; 

const VehicleMaintenanceForm = ({ vehicleId, onSubmit }) => {
  const [maintenanceDate, setMaintenanceDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!maintenanceDate) {
      alert('Please select a maintenance date');
      return;
    }

    onSubmit(vehicleId, { maintenanceDate, notes });
  };

  return (
    <form onSubmit={handleSubmit} className="maintenance-form">
      <h3>Set Maintenance Date for Vehicle</h3>
      <div className="form-group">
        <label htmlFor="maintenanceDate">Maintenance Date:</label>
        <input
          type="date"
          id="maintenanceDate"
          value={maintenanceDate}
          onChange={(e) => setMaintenanceDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter any notes about the maintenance"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">Save Maintenance Date</button>
    </form>
  );
};

export default VehicleMaintenanceForm;
