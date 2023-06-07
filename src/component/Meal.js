import React from 'react'
import '../css/meal.css'
import { useSelector } from 'react-redux'

const Meal = () => {
  const FoodingName=useSelector((state)=>state.meal)
  console.log(FoodingName)
 
    return(
      <div className='meal-details'>
        <div className='meals-body'>
          {
            FoodingName && FoodingName.map((val,idx)=>{
              return <div className='meal' key={idx}>
                <h3>food name:{val.strMeal}</h3>
                <img src={val.strMealThumb} alt='meal'/>
                <p>{val.strInstructions}</p>
              </div>
            })
          }
        </div>
      </div>
    )
}

export default Meal