import React from "react";  
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/BusManager/Dashboard/DashboardLayout";
import "./DashboardPage.css";
function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li>  
            <Link to="../../pages/BusManager/EmergencyAlertPage">
            Emergency Alerts
            </Link>
          </li>
          <li><Link to ="../BusManager/DailyLogsPage.js">Daily Logs</Link></li>
          {/* Add other sections of the dashboard */}

        <li ></li>


        

        </ul>
      </div>

      <div className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <p>Select a feature from the sidebar to get started.</p>
      </div>
    </div>
  );
  <DashboardLayout />;
}

export default DashboardPage;
