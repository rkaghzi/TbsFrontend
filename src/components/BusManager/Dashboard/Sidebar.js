import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/FeedbackPage/vehicle123">
              Passenger Feedback
            </NavLink>
          </li>
          <li>
            <Link to="/EmergencyAlert">Emergency Alerts</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
