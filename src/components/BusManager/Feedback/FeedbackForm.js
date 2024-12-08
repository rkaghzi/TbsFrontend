import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css";

function FeedbackForm({ vehicleId }) {
  const [passengerName, setPassengerName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/vehicles/${vehicleId}/feedback`, {
        passengerName,
        feedback,
        rating,
      });
      alert("Feedback submitted successfully!");
      setPassengerName("");
      setFeedback("");
      setRating(1);
    } catch (error) {
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <label>
        Name:
        <input
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          required
        />
      </label>
      <label>
        Feedback:
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
