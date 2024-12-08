import React from "react";
import { useParams } from "react-router-dom";
import FeedbackList from "../../components/BusManager/Feedback/FeedbackList";
import FeedbackForm from "../../components/BusManager/Feedback/FeedbackForm";
import "./FeedbackPage.css";

function FeedbackPage() {
  const { vehicleId } = useParams(); // Extract vehicleId from the URL

  return (
    <div className="feedback-page">
      <h1>Passenger Feedback</h1>
      <FeedbackForm vehicleId={vehicleId} />
      <FeedbackList vehicleId={vehicleId} />
    </div>
  );
}

export default FeedbackPage;
