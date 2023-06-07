import React from 'react'
// import { removeFav,viewDetails } from '../food/FoodSlice'
import '../css/fav.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RemoveFav, ViewFav } from '../redux/MealSlice'
import { useState } from 'react'
const Fav = () => {
  const dispatch=useDispatch();
  const FoodSlice=useSelector((state)=>state.meal);
  console.log(FoodSlice)
  const Delete=(id)=>{
    dispatch(RemoveFav(id))


  }
  const Details=(id)=>{
    const FoodName=FoodSlice.at(id);
    console.log(FoodName)
    dispatch(ViewFav(FoodName));

  
  }

 

  
   
  return (
    <div className='card-template'>
    <div className='card-Body'>
      {
        FoodSlice && FoodSlice.map((val,idx)=>{
          return <div className='card' key={idx}>
            <h3>food name:{val.strMeal}</h3>
            <img src={val.strMealThumb} alt='food_image'/><br/>
            <button className='favu' onClick={()=>Delete(idx)}>remove from faviourate</button>
            <button className='favu' onClick={()=>Details(idx)}>View</button>
          </div>
        })
      }
    </div>
    
    
    </div>
    

  
    
    
   
  )
}

export default Fav