import React, { useState } from 'react'
import "../styles/CreateHabit.css"
import { firestore } from './firebase.js'
import { addDoc, collection } from "@firebase/firestore"
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function CreateHabit() {
    const navigate = useNavigate()
    const [habit, setHabit] = useState();

    

    function handleSubmit(e){
        e.preventDefault()
        const ref = collection(firestore, "tracker")
        let data = {
          habit,
          createdAt: new Date()
          }
        
         try {
          addDoc(ref, data)
          } catch(err) {
          console.log(err)
          }
          navigate("/")
      }
      

    const handleChange=(e)=>{
        setHabit(e.target.value)
    }

    
    
    


  return (
    <>
    <form onSubmit={handleSubmit} className='habit-container'>
     <input
    name="habit" 
     type="text" 
     placeholder="Add your habit here" 
     onChange={handleChange} 
      
     />
     <h1>{habit}</h1>
     <button className='add-track-btn'>Add to Tracker</button>
     <Link className='add-track-link' to="/">Back to Home</Link>
    </form>
    

    
    
    
    
    </>
  )
}

export default CreateHabit
