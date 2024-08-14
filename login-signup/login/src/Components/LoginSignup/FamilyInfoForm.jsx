import React, { useState } from 'react';
import './FamilyInfoForm.css'
import { Link } from 'react-router-dom'

const FamilyInfoForm = () => {
  const [familyMembers, setFamilyMembers] = useState([]);

  const handleAddMember = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const relation = e.target.elements.relation.value;
    const bloodGroup = e.target.elements.bloodGroup.value;
    const aadharNo = e.target.elements.aadharNo.value;
    const workingStatus = e.target.elements.workingStatus.value;

    const newMember = {
      name,
      relation,
      bloodGroup,
      aadharNo,
      workingStatus,
    };

    setFamilyMembers([...familyMembers, newMember]);
    e.target.elements.name.value = '';
    e.target.elements.relation.value = '';
    e.target.elements.bloodGroup.value = '';
    e.target.elements.aadharNo.value = '';
    e.target.elements.workingStatus.value = '';
  };

  return (
    <div className='fam'>
      <h2>Family Information Form</h2>
      <form onSubmit={handleAddMember} className='form'>
        <div className='n'>
          <label>Name :</label>
          <input type="text" name="name" />
        </div>
        <div className='r'>
          <label>Relation to Staff :</label>
          <input type="text" name="relation" />
        </div>
        <div className='b'>
          <label>Blood Group :</label>
          <input type="text" name="bloodGroup" />
        </div>
        <div className='g'>
          <label>Gender :</label>
          <input type="text" name="gender" />
        </div>
        <div className='age'>
          <label>Age :</label>
          <input type="text" name="age" />
        </div>
        <div className='aadhar'>
          <label>Aadhar Number :</label>
          <input type="text" name="aadharNo" />
        </div>
        <div>
          <label>Employment Status :</label>
          <input type="text" name="workingStatus" />
        </div>
        <button type="submit" className='sub'>Add Member</button>
        <Link to="/complaintform" className='sub'>Complaint Form</Link>
        <Link to="/" className='sub'>Home</Link>
      </form>
    </div>
  );
};

export default FamilyInfoForm;
