import React from 'react'
import Image6 from '../assets/Image6.jpg'

export default function Portfolio() {
  return (
    <div style={{height:"90vh",width:"100vw",background:'linear-gradient(to bottom,purple,black)'}}>
      <img src={Image6} style={{height:530,width:450,position:"absolute",top:140,left:70,borderRadius:15,border:"5px solid white"}}></img>

        <p style={{color:"white",fontSize:19,left:650,position:"absolute",textAlign:"center",top:75}}>1. Personal Portfolio Website
          <ul>
            <li>Purpose: Showcase your skills, projects, and contact information.</li>
            <li>Features:
              <ul >
                <li>Responsive design.</li>
                <li>Light and dark mode.</li>
                <li>Smooth scrolling navigation.</li>
              </ul>
            </li>
          </ul>
Tech Stack: HTML, CSS (or Tailwind CSS/Bootstrap), JavaScript.
<br></br>
<br></br>

2. Responsive Landing Page
<ul>
            <li>Purpose: Display your ability to create visually appealing marketing pages..</li>
            <li>Features:
              <ul >
                <li>Hero section with call-to-action buttons.</li>
                <li>Testimonials or features section.</li>
                <li>Email subscription form.</li>
              </ul>
            </li>
          </ul>
Tech Stack: HTML, CSS, JavaScript.
<br></br>
<br></br>

3. Basic Calculator
<ul>
            <li>Purpose: Highlight your JavaScript skills.</li>
            <li>Features:
              <ul>
                <li>Perform basic arithmetic operations.</li>
                <li>Clear and delete buttons..</li>
                <li>Responsive design for mobile usage..</li>
              </ul>
            </li>
          </ul>
Tech Stack: HTML, CSS, JavaScript.</p>
    </div>
  )
}
