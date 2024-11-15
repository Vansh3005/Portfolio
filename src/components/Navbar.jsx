import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-auto'>
        <header style={{height:"70px",width:"100%", background:"linear-gradient(to left,grey,black)"}} >
            <h1 style={{color:"white",fontSize:35,position:"absolute",left:40,top:10,fontFamily:"serif",fontWeight:"bold"}} className='animate-pulse'>VG</h1>
           
            <ul style={{color:"white", display:"flex", position:"absolute",fontSize:"20px",fontFamily:"sans-serif",left:"750px",gap:"50px",top:"25px",margin:0,padding:0}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>

        <Outlet></Outlet>

    </div>
  )
}
