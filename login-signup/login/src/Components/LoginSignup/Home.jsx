import React,{useState} from 'react'
import './Home.css'
import LoginSignup from './LoginSignup'
import bit from '../Assests/bit.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const [action,setAction]=useState("Sign Up")
  return (
    <div className="box">
        <img src={bit} alt="" />
        <div className="hm">BIT STAFF QUARTERS PORTAL</div>
        <div className="sum-contain">
          <Link to="/loginsignup" className='summit'>Admin</Link>
          <Link to="/loginsignup" className='summit'>User</Link>
          <Link to="/profile" >Profile</Link>
        </div>
    </div>
  )
}

export default Home