
import React from 'react'
import Image from '../assets/Image.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate=useNavigate();

  function handleclick(){
    navigate('/contact')
  }

  return (
   <div style={{width:"100vw",height:"90vh",background:"linear-gradient(to top,black,red)"}}>
    <h2 className='text-white animate-bounce' style={{fontSize:35,position:"absolute",top:240,left:45,fontFamily:"sans-serif",fontWeight:"bold"}}>Hello, Welcome</h2>

    <h1 className='text-yellow-100' style={{fontSize:50,position:"absolute",left:45,top:290}}> I m Vansh Goyal </h1>

    <p style={{fontFamily:"monospace",fontSize:20,position:"absolute",top:370,color:"white",textAlign:"-webkit-match-parent",marginRight:1000,left:45,fontWeight:"bold"}}>"Hello! I’m Vansh Goyal, a passionate front-end developer focused on building user-friendly and visually appealing web applications. With a solid foundation in HTML, CSS, and JavaScript.</p>

    <Link to='/contact'><button className='bg-red-200' style={{height:50,width:150,borderRadius:10,color:"red",fontSize:20,textAlign:"center",fontWeight:"bold",position:"absolute",top:550,left:45}} onClick={handleclick}>Contact Me</button></Link>

    <div className='animate-spin' style={{height:480,width:480,borderRadius:"100%",position:"absolute",left:885.5,top:165,background:'linear-gradient(to bottom,red,black)'}}></div>

    <img src={Image} style={{height:450,width:450,borderRadius:"100%",position:"absolute",left:900,top:180}}></img>

    
    </div>
  )
}

 