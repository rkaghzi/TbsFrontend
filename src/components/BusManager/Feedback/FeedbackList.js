import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedbackList.css";

function FeedbackList({ vehicleId }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`/api/vehicles/${vehicleId}/feedback`);
        setFeedbacks(response.data);
      } catch (error) {
        alert("Failed to fetch feedback. Please try again.");
      }
    };

    fetchFeedback();
  }, [vehicleId]);

  const handleDelete = async (feedbackId) => {
    try {
      await axios.delete(`/api/vehicles/${vehicleId}/feedback/${feedbackId}`);
      alert("Feedback deleted successfully!");
      setFeedbacks((prev) => prev.filter((f) => f._id !== feedbackId));
    } catch (error) {
      alert("Failed to delete feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback._id}>
              <p>
                <strong>{feedback.passengerName}:</strong> {feedback.feedback}
              </p>
              <p>Rating: {feedback.rating}</p>
              <p>Date: {new Date(feedback.date).toLocaleDateString()}</p>
              <button onClick={() => handleDelete(feedback._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
