import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { firestore } from './firebase.js'
import "../styles/Home.css"


function Home() {
    const [habit, setHabit] = useState([]);
    const [refresh, setRefresh] = useState(false)
    

    useEffect(() => {
        firestore
          .collection('tracker')
          .get()
          .then((snapshot) => {
            const habit = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
              
            });
            console.log('posts', habit);
            setHabit(habit);
            
          });

          
      }, [refresh]);


      //checkbox function

      

    //deleting function

     const deleteStorage = (id, collection) => {
            firestore
              .collection(collection)
              .doc(id)
              .delete();
              refresh ? setRefresh(false) : setRefresh(true) 
    }
      
  return (
    <div>
    <ul>
    {habit.map((post, index) => (
        <li className="habit" key={`habit-${index}`}>
            <div className='align-items'>
            <Link className="linkToDetails" to={`/post/${post.id}`} >
            <h1 className='main-title'>{post.habit}</h1>
            
          </Link>
            <button onClick={() => deleteStorage(post.id, "tracker")} className='dlt-btn'>Delete</button>
        </div>
          
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Home
