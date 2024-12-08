
import React from 'react';
import VehicleMaintenanceForm from '../../components/BusManager/Maintainence/VehicleMaintainenceForm';

const VehicleMaintenancePage = ({ vehicleId }) => {
  const handleMaintenanceSubmit = (vehicleId, maintenanceData) => {
    // Here you can make an API call to save the maintenance date
    console.log('Maintenance data submitted:', vehicleId, maintenanceData);
  };

  return (
    <div className="maintenance-page">
      <h2>Vehicle Maintenance</h2>
      <VehicleMaintenanceForm vehicleId={vehicleId} onSubmit={handleMaintenanceSubmit} />
    </div>
  );
};

export default VehicleMaintenancePage;
