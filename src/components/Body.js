import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
import { useEffect, useState } from 'react';
import { Swiggy_API_Cdn } from "../constants";
import Shimmer from "./Shimmer";
function filterData(inputtext, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(inputtext.toLowerCase())
  );
  return filterData;
}


 const Body =()=>{

    const [inputtext , setInputtext] = useState("");
    const [filteredRestautants,setFilteredRestaurants] =useState(Restaurantlist);
     const [allRestaurants, setAllRestaurants] = useState([]);
  //const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


  //to render restaurant for first time
  useEffect(()=>{
    getRestaurants();
  },[]);


  //async function to fetch swiggy API data
  async function getRestaurants(){
    //try catch to handle error
    try{
        const data = await fetch(Swiggy_API_Cdn);
        const json = await data.json();

         // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }



      const restaurantData = await checkJsonData(json);

      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch(error) {
        console.log(error);
    }
  }



const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filterData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
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
        className="search-input"
        placeholder="search a restaurant you want"
        value={inputtext}
        onChange={(e)=>setInputtext(e.target.value)
        }>
        </input>
        <button
        className="submit-btn"
        onClick={()=>{
           searchData(inputtext,allRestaurants);
            }}>
            search
            </button>
    </div>
     {errorMessage && <div className="error-container">{errorMessage}</div>}

    {
      allRestaurants?.length===0 ? (
      <Shimmer/>
  ):(
    <div className="restaurant-list">{
      filteredRestautants.map((restaurant)=>{
        return (
          <RestaurantCard key={
            restaurant?.info?.id
          }
          {
            ...restaurant?.info
          } />
        );
      })}
    </div>
  )}
  </>
);

};

export default Body;

