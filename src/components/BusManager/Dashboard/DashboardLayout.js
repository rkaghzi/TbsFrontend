import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
