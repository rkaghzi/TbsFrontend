import React, { useState } from "react";
import "./EmergencyAlert.css";

function EmergencyAlert() {
  const [message, setMessage] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [emailAddresses, setEmailAddresses] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumbersArray = phoneNumbers.split(",").map((number) => number.trim());
    const emailAddressesArray = emailAddresses.split(",").map((email) => email.trim());

    const alertData = {
      message,
      phoneNumbers: phoneNumbersArray,
      emailAddresses: emailAddressesArray,
    };

    try {
      const response = await fetch("http://localhost:5000/api/emergency-alerts/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alertData),
      });

      if (response.ok) {
        setAlertStatus("Emergency alerts sent and saved successfully.");
      } else {
        const data = await response.json();
        setAlertStatus(data.message || "Error sending alert.");
      }
    } catch (error) {
      setAlertStatus("Error sending alert.");
    }
  };

  return (
    <div className="emergency-alert-container">
      <h2>Send Emergency Alert</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Alert Message</label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <label htmlFor="phoneNumbers">Phone Numbers (comma separated)</label>
        <input
          type="text"
          id="phoneNumbers"
          value={phoneNumbers}
          onChange={(e) => setPhoneNumbers(e.target.value)}
        />

        <label htmlFor="emailAddresses">Email Addresses (comma separated)</label>
        <input
          type="text"
          id="emailAddresses"
          value={emailAddresses}
          onChange={(e) => setEmailAddresses(e.target.value)}
        />

        <button type="submit">Send Alert</button>
      </form>

      {alertStatus && <div className="alert-status">{alertStatus}</div>}
    </div>
  );
}

export default EmergencyAlert;
