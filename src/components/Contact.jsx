import React from 'react'
import Image3 from '../assets/Image3.jpg'

export default function Contact() {
  return (
    <div style={{height:"90vh",width:"100vw",background:'linear-gradient(to bottom,grey,black)'}}>
      <ul  className='text-yellow-200' style={{fontSize:45,fontFamily:"cursive",position:"absolute",top:180,left:500,textAlign:"center"}}>
        <li>Email Address: <a href='#'>Vansh12@gmail.com</a></li>
        <li>Contact Number: +91 9087453229</li>
        <li>Social Media: <a href="#">Twitter.com</a></li>
        <li><p>This our contact information for contact to me</p></li>
      </ul>
      <h1 style={{color:"white",fontSize:35,position:"absolute",top:530,left:430,textAlign:"center",fontWeight:"bolder"}} className='animate-pulse'>Note: This all information is dummy show for representing purpose only</h1>

      <img src={Image3} style={{height:450,width:450,position:"absolute",top:160,left:20,borderRadius:15,border:"5px solid white"}}></img>
    </div>
  )
}
