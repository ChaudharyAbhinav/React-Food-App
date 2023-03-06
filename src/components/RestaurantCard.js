import { IMG_CDN } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,

})=>{
    return(
        <div className="card">
            <img src={
          IMG_CDN+ cloudinaryImageId
            }/>
        <h2 style={{fontSize :'15px' }}>{name}</h2>
        <h3 style={{fontSize:'15px'}}>{areaName}</h3>
        <h4 style={{ fontSize: '12px', fontWeight: 'lighter' }}>{cuisines.join(", ")}</h4>
        <span>
           <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '200 for two'}</h4>
        </span>
        </div>
    );
};




export default RestaurantCard;
