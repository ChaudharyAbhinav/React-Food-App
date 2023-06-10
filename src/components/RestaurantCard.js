import { IMG_CDN } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,

})=>{
    return(
        <div className="card">
            <img src={             
          IMG_CDN+ cloudinaryImageId
            }/>
        <h2>{name}</h2>
        <h3>{area}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <span>
            <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
        </span>
        </div>
    );
};




export default RestaurantCard;