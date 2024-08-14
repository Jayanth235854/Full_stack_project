import React, { useState } from 'react';
import './ComplaintForm.css';
import { Link } from 'react-router-dom';

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({
    complaintName: '',
    quartersNo: '',
    name: '',
    mobileNo: '',
    availabilityTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaint((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting complaint:', complaint);
  };

  return (
    <div className="complaint-form">
      <h2>Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Complaint Name:</label>
          <select name="complaintName" value={complaint.complaintName} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Garden">Garden</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label>Quarters No:</label>
          <input type="text" name="quartersNo" value={complaint.quartersNo} onChange={handleInputChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={complaint.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Mobile No:</label>
          <input type="text" name="mobileNo" value={complaint.mobileNo} onChange={handleInputChange} />
        </div>
        <div>
          <label>Availability Time:</label>
          <select name="availabilityTime" value={complaint.availabilityTime} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Morning">Morning - 8 AM to 11 AM</option>
            <option value="Afternoon">Afternoon - 1 PM to 3 PM</option>
            <option value="Evening">Evening - 4 PM to 8 PM</option>
          </select>
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ComplaintForm;
