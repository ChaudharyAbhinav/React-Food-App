import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useState } from 'react';


function filterData(inputtext, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(inputtext.toLowerCase())
  );
  return filterData;
}


 const Body =()=>{
  
    const [inputtext , setInputtext] = useState("");
    const [restautants,setRestaurants] =useState(Restaurantlist);
    return(
        <>
    <div className="search-container">
        <input 
        type="text" 
        value={inputtext} 
        onChange={(e)=>setInputtext(e.target.value)
        }>             
        </input>
        <button 
        className="submit-btn" 
        onClick={()=>{
              const result = filterData(inputtext,restautants);  
               setRestaurants(result) 
            }
        }>search</button>
    </div>
    <div className="restaurant-list">

        {restautants.map((restaurant)=>{
            return( <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            );
        })}
    </div>

        </>
)

}

export default Body;

