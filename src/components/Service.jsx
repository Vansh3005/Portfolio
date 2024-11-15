import React from 'react'
import Image5 from '../assets/Image5.jpg'

export default function Service() {
  return (
    <div style={{height:"90vh",width:"100vw",background:'linear-gradient(to bottom,pink,black)'}}>
      <img src={Image5} style={{height:530,width:450,position:"absolute",top:160,left:40,borderRadius:15,border:"5px solid white"}}></img>
      <h1 style={{fontSize:40,color:"white",position:"absolute",left:50,fontWeight:"bold",top:80}}>Services </h1>
<p className='text-white' style={{fontSize:16.5,position:"absolute",left:600,top:110,textAlign:"center",fontFamily:"monospace",listStyle:"inside",fontWeight:"bold"}}>1.1 Responsive Web Design
<ul>
  <li>Creating websites that look great on all devices (mobile, tablet, desktop).</li>
  <li>Using modern techniques like CSS Grid, Flexbox, and media queries.</li>
</ul>
1.2 Frontend Development
<ul>
  <li>Developing user interfaces with technologies like HTML, CSS, and JavaScript.</li>
  <li>Expertise in modern frameworks like React, Vue.js, or Angular.</li>
</ul>
1.3 Performance Optimization
<ul>
  <li>Improving page load times and performance.</li>
  <li>Techniques like lazy loading, minification, and image optimization.</li>
</ul>
1.4 Cross-Browser Compatibility
<ul>
  <li>Ensuring websites work seamlessly across all major browsers (Chrome, Firefox, Safari, Edge).</li>
</ul>
1.5 UI/UX Implementation
<ul>
  <li>Translating design mockups (e.g., Figma, Sketch, Adobe XD) into functional, pixel-perfect code.</li>
  <li>Enhancing user experience with smooth interactions and animations.</li>
</ul>
1.6 Single Page Applications (SPAs)
<ul>
  <li>Building fast, dynamic web applications using React or other libraries.</li>
</ul>
1.7 Web Accessibility
<ul>
  <li>Ensuring websites are accessible to users with disabilities (WCAG compliance).</li>
</ul>
1.8 API Integration
<ul>
  <li>Connecting frontend apps with APIs to fetch or send data.</li>
</ul>
1.9 Maintenance & Updates
<ul>
  <li>Ongoing support to fix bugs, update content, or add new features.</li>
</ul>
1.10 Customization
<ul>
  <li>Tailored frontend solutions to meet unique business requirements.</li>
</ul>
  
</p>

     
    </div>
  )
}
