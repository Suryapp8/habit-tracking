import React, { useEffect, useState } from 'react'
import "../styles/ViewHabit.css"
import {useParams, Link} from "react-router-dom"
import { firestore } from './firebase'

function ViewHabit() {
  const [post, setPost] = useState({})
  const {postId} = useParams()
  const [checked, setChecked] = useState("Not Done")
  const valueBox = ()=>{
    setChecked("Done")
    alert("Congratulations! Task Completed")
  }
  useEffect(()=>{
    firestore.collection("tracker").doc(postId).get().then((snapshot)=>{
      setPost(snapshot.data())
    })
  })
  return (
    <>
    <Link className='link-to-home' to="/"><h1 className='mainhead'>{post.habit}</h1></Link>
    <div className='week-view'>
      <div className='days-view'>Day 1 <br /><span>Done</span></div>
      <div className='days-view'>Day 2 <br /><span>Done</span></div>
      <div className='days-view'><input onChange={valueBox} type="checkbox" />Day 3 <br /><span>{checked}</span></div>
      <div className='days-view'>Day 4 <br /> <span>Not Done</span></div>
      <div className='days-view'>Day 5 <br /><span>Not Done</span></div>
      <div className='days-view'>Day 6 <br /><span>Not Done</span></div>
      <div className='days-view'>Day 7 <br /><span>Not Done</span></div>
    </div>
    </>
  )
}

export default ViewHabit
