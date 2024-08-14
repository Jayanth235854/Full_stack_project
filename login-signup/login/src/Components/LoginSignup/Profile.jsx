import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="pro">
        <div className="head">PROFILE</div>
        <div className="inps">
            <div className="inp">
              <input type="text" placeholder="Name" />
            </div>
            <div className="inp">
              <input type="tel" placeholder="Age" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Quarters Number" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Department" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Check In Date & Time" />
            </div>
            <div className="inp">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inp">
              <input type="tel" placeholder="Mobile Number" />
            </div>
            <div className="inp">
              <input type="email" placeholder="Mail ID" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Blood Group" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Aadhar Number" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Pan Card Number" />
            </div>
            <div className="inp">
              <input type="text" placeholder="Permanent Address" />
            </div>
            <div className="sumcontain">
              <button className='sumit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Profile;
