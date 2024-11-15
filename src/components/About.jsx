import React from 'react'
import Image2 from '../assets/Image2.jpg'

export default function About() {
  return (
    <div style={{height:"90vh",width:"100vw",background:'linear-gradient(to bottom,blue,black)'}}>
      <p style={{fontSize:25,color:"white",marginLeft:500,position:"absolute",top:130,right:30}}>A frontend developer is a web developer who specializes in the part of a website or application that users interact with directly. They focus on creating the visual aspects and ensuring a smooth, engaging user experience (UX).

Key responsibilities include:

Designing and developing the user interface (UI): This involves working with HTML, CSS, and JavaScript to create layout, structure, and interactive elements.
Ensuring responsiveness: Making sure websites look good on all devices, from desktops to smartphones.
Optimizing performance: Ensuring pages load quickly and efficiently.
Collaborating with backend developers: To integrate the frontend with databases and other server-side components.
Common tools and technologies:

<ul style={{listStyle:"outside",position:"relative",left:25,top:15}}>
  <li>HTML for structure.</li>
  <li>CSS for styling and layout.</li>
  <li>JavaScript for interactivity.</li>
</ul> <br></br>
Frameworks like React, Angular, or Vue.js for building dynamic, single-page applications.
Version control systems like Git.
</p>

<img src={Image2} style={{height:530,width:450,position:"absolute",top:140,left:20,borderRadius:15,border:"5px solid white"}}></img>
    </div>
  )
}

