import React from 'react'
import MyResume from '../assets/MyResume.pdf'
import Image4 from '../assets/Image4.jpg'

export default function Resume() {
  return (
    <div style={{background:"linear-gradient(to bottom,green,black)",height:"90vh",width:"100vw"}}>
      <a href={MyResume} ><img src={Image4} style={{height:550,width:900,position:"absolute",left:290,top:100,borderRadius:20,border:"5px solid white"}}></img></a>
      <h1 className='text-green-100' style={{fontSize:35,fontFamily:"serif",fontWeight:"bold",position:"absolute",top:130,left:480}}>Click On Pic For Resume Showing</h1>
      <a href={MyResume} download={MyResume}><button style={{height:50,width:900,borderRadius:10,color:"white",fontSize:20,textAlign:"center",fontWeight:"bold",background:"linear-gradient(to top,grey,black)",position:"absolute",top:670,left:290,border:"3px solid white"}}>Download Resume</button>
      </a>
    </div>
  )
}
