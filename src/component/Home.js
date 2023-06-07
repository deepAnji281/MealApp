import React, { useState } from 'react'
import '../css/Home.css'

const Home = (props) => {
  const id=props.id;
  
  
    
  return (
   
    <div className='card-template'>
    <div className='card-body'>
      <div className='card'>
        <h3>food name : {props.name}</h3>
        <img src={`${props.strMealThumb}`} alt='food_image'/><br/>
        <button className='favu' onClick={()=>props.save(id)}>Add To Faviourates</button>
       
      </div>
    </div>
    

   </div>
  
  )
}

export default Home