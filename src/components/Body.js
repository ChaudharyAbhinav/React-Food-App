import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useEffect, useState } from 'react';
import { Swiggy_API_Cdn } from "../constants";

function filterData(inputtext, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(inputtext.toLowerCase())
  );
  return filterData;
}


 const Body =()=>{
  
    const [inputtext , setInputtext] = useState("");
    // const [restautants,setRestaurants] =useState(Restaurantlist);
     const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
   
  useEffect(()=>{
    getRestaurants();
  },[]);
  
  async function getRestaurants(){
    try{
        const data = await fetch(Swiggy_API_Cdn);
        const json = await data.json();

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch(error) {
        console.log(error);
    }
  }
  
const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };


    // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;


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
              searchData(inputtext,allRestaurants);  
               
            }
        }>search</button>
    </div>
    <div className="restaurant-list">

        {filteredRestaurants.map((restaurant)=>{
            return( <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            );
        })}
    </div>

        </>
)

}

export default Body;

