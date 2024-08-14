import React, { useState } from 'react';
import './GuestArrivalDetails.css';
import { Link } from 'react-router-dom';

const GuestArrivalDetails = () => {
  const [arrivalDetails, setArrivalDetails] = useState({
    numberOfGuests: 1,
    fromPlace: '',
    checkIn: '',
    checkOut: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArrivalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guest Arrival Details:', arrivalDetails);
  };

  return (
    <div className="guest-arrival-details">
      <h2>Guest Arrival Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of Guests:</label>
          <input type="number" name="numberOfGuests" value={arrivalDetails.numberOfGuests} onChange={handleInputChange} />
        </div>
        <div>
          <label>From (Place):</label>
          <input type="text" name="fromPlace" value={arrivalDetails.fromPlace} onChange={handleInputChange} />
        </div>
        <div>
          <label>Check-in:</label>
          <input type="datetime-local" name="checkIn" value={arrivalDetails.checkIn} onChange={handleInputChange} />
        </div>
        <div>
          <label>Check-out:</label>
          <input type="datetime-local" name="checkOut" value={arrivalDetails.checkOut} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default GuestArrivalDetails;