import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import ErrorPage from "../pages/ErrorPage";
import DashboardPage from '../pages/BusManager/DashboardPage';
import FeedbackPage from '../pages/BusManager/FeedbackPage';
import Assignment from '../pages/BusManager/Assignment';
import EmergencyAlert from "../components/BusManager/EmergencyAlert/EmergencyALert";
import EmergencyAlertPage from "../pages/BusManager/EmergencyAlertPage";
import DailyLogDetailsPage from "../pages/BusManager/DailyLogDetailsPage";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<ErrorPage />} />

      <Route path="/dailyLog " element = {<DailyLogDetailsPage/>} />
      <Route path="/ea" element ={<EmergencyAlert/>} /> 
      <Route path="/E-Page" element ={<EmergencyAlertPage/>} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/assignment" element={<Assignment />} />
  </Routes>
);

export default AppRoutes;
