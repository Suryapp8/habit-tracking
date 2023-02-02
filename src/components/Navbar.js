import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css";

export default function Navbar() {
  
    
  let time = new Date().toLocaleTimeString()
  const [cTime, setCtime] = useState(time);
  const update = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(update, 1000)



  return (
    <div className='nav-container'>
       <Link className='nav-link' to="/"><img style={{height: "3rem", width: "3rem"}} src="https://cdn-icons-png.flaticon.com/512/3703/3703446.png" /></Link>
      <Link className='nav-link nav-btn' to="/createhabit">+ Add Habit</Link>
      <h3 style={{color : "white"}}>{cTime}</h3>
      
    </div>
  )
}
