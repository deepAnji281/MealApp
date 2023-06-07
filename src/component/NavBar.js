import React from 'react'
import { Link} from 'react-router-dom'
import '../css/nav.css'
import { useDispatch } from 'react-redux'
import { AddFav } from '../redux/MealSlice'
import Home from './Home'
import { useState } from 'react'

// import { addFav } from '../food/FoodSlice'
const NavBar = () => {
  const dispatch=useDispatch();
  
  
  

  
 const[inp,setInp]=useState('');
 const[foodArr,setFood]=useState([]);



  const addToFav=(id)=>{
    let foodDetails=foodArr.at(id);
    console.log(foodDetails);
    
    dispatch(AddFav(foodDetails));
    

  }
  

   
    const handleChanges=(e)=>{
        setInp(e.target.value);
        console.log(inp);
    }
    const handleSubmit=async()=>{
     const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`);
     const data=await res.json();
     const val=await data.meals;
      setFood(val);
     
    
         
    }

  return (
    <div className='navbar-template'>
        <div className='navbar-items'>
        <Link to={'/'} style={{textDecoration:'none'}}><h2 className='header2'>Home</h2></Link>
       <Link to={'/meals'} style={{textDecoration:'none'}}> <h2 className='header2'>meal-details</h2></Link>
       <Link to={'/fav'} style={{textDecoration:'none'}}><h2 className='header2'>faviourate</h2></Link>
       <div className='search-box'>
               <input type='search' placeholder='enter your faviourate food name' className='search' onChange={handleChanges}/>
                <button className='button' onClick={handleSubmit}><i className="fa fa-search"></i></button>
       </div>
           
        </div>
         <div className='patch-card'>
         {
         foodArr && foodArr.map((meal,idx)=>(
            
               <Home name={meal.strMeal} strMealThumb={meal.strMealThumb} key={meal.idMeal} id={idx} save={addToFav}/>
            
          ))
        }
        


         </div>
    </div>
  )
}

export default NavBar