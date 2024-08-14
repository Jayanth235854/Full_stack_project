import React, { useState } from 'react';
import './InmatesCheckInOut.css'
import { Link } from 'react-router-dom'

const InmatesCheckInOut = () => {
  const [inmatesDetails, setInmatesDetails] = useState({
    inmatesName: '',
    quartersNo: '',
    checkedInTime: '',
    checkedOutTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInmatesDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inmates Details:', inmatesDetails);
  };

  return (
    <div className="inmates-check-in-out">
      <h2>Inmates Check-in and Check-out Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Inmate Name:</label>
          <input type="text" name="inmatesName" value={inmatesDetails.inmatesName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Qurters No:</label>
          <input type="text" name="quartersNo" value={inmatesDetails.quartersNo} onChange={handleInputChange} />
        </div>
        <div>
          <label>Checked-in Time:</label>
          <input type="datetime-local" name="checkedInTime" value={inmatesDetails.checkedInTime} onChange={handleInputChange} />
        </div>
        <div>
          <label>Checked-out Time:</label>
          <input type="datetime-local" name="checkedOutTime" value={inmatesDetails.checkedOutTime} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default InmatesCheckInOut