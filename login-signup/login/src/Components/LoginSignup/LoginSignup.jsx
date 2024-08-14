import React,{useState} from 'react'
import './LoginSignup.css'
import user from '../Assests/person.png'
import email from '../Assests/email.png'
import password from '../Assests/password.png'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up")
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input" >
                <img src={user} alt="" />
                <input type="text" placeholder='UserName' />
            </div>}
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password <span>Click here?</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup