import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from './pages/Home';
import Assignment from './pages/BusManager/Assignment';
import DashboardPage from "./pages/BusManager/DashboardPage";
import FeedbackPage from "./pages/BusManager/FeedbackPage";
import EmergencyAlertPage from "./pages/BusManager/EmergencyAlertPage";
import VehicleMaintenancePage from "./pages/BusManager/VehicleMaintainencePage";
import DailyLogForm from '../src/components/BusManager/DailyLog/DailyLogForm';
import DailyLogsPage from './pages/BusManager/DailyLogsPage';
import DailyLogDetailsPage from './pages/BusManager/DailyLogDetailsPage';
import LostItemsPage from './pages/BusManager/LostItemsPage';
import LostItemDetailsPage from './pages/BusManager/LostItemDetailsPage'; 
import CheckInListPage from './pages/BusManager/CheckInListPage';
import CheckInDetailPage from './pages/BusManager/CheckInDetailPage';
import CreateCheckInPage from './pages/BusManager/CreateCheckInPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/feedback/:vehicleId" element={<FeedbackPage />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/emergency-alert" element={<EmergencyAlertPage />} />
        
        <Route path="/maintenance/:vehicleId" element={<VehicleMaintenancePage />} /> 

        <Route path="/logs" exact component={DailyLogsPage} />
        <Route path="/logs/create" component={DailyLogForm} />
        <Route path="/logs/:id" component={DailyLogDetailsPage} />
        
        <Route path="/lostitems" exact component={LostItemsPage} />
        <Route path="/lostitems/:id" component={LostItemDetailsPage} />

         <Route path="/checkin" exact component={CheckInListPage} />
         <Route path="/checkin/:ticketNumber" component={CheckInDetailPage} />
         <Route path="/create-checkin" component={CreateCheckInPage} />
          
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
