import React from 'react';
import AssignDriverForm from '../../components/BusManager/Assignment/AssignDriverForm';
import UnassignDriverForm from '../../components/BusManager/Assignment/UnassignDriverForm';
import './Assignment.css';
const Assignment = () => {
    return (
        <div>
            <h1>Driver and Bus Assignment</h1>
            <div>
                <AssignDriverForm />
                <UnassignDriverForm />
            </div>
        </div>
    );
};

export default Assignment;
