import RestaurantCard from "./RestaurantCard";
import { Restaurantlist } from "../constants";
const Body =()=>(
    <div className="restaurant-list">
        {Restaurantlist.map((restaurant)=>{
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
        })}
    </div>

)


export default Body;