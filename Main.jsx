import React, { useState } from 'react'
import "./style.css"
import Card from './Card'
import Images from './Images'
import { useEffect } from 'react'

export default function Main() {
  const[dis,setDis]=useState("")
  useEffect(()=>{
    let box=document.querySelector(".card-container")
    setDis(box);
    console.log(box);
    box.scrollLeft=box.scrollLeft+800
  },[])
  

  function scroll_Left(){
    let width=dis.clientWidth
    dis.scrollLeft=dis.scrollLeft-width;
    console.log(dis.scrollLeft)
    if(!dis.scrollLeft){
      dis.scrollLeft=1000
    }
  }
  function scroll_Right(){
    let width=dis.clientWidth
    dis.scrollLeft=dis.scrollLeft+width;
  }
  
  return (
    <div className='success-main'>
      <button className='btn btn-left' onClick={scroll_Left}>&lt;</button>
      <button className='btn btn-right' onClick={scroll_Right}>&gt;</button>
      <div className="card-container">
      {
        Images.map((item,i)=>(
          <Card key={i} image={item}/>
        ))
      }
      </div>
    </div>
  )
}
