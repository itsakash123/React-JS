import { CDN_URL } from "../utils/constants";
import ratingStar from "url:../assets/star.png";
const RestaurantCard =(props)=>{
  const {resData} = props;
  const {
    name,
    costForTwo,
    avgRating,
    totalRatingsString,
    
    sla,
    cloudinaryImageId,
  } = resData.info;

  return (
    <div className="bg-white w-65 h-82 rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-200 cursor-pointer group">
      <img
        className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-400"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <p>{costForTwo}</p>
      <p className="flex items-center gap-1">
        {avgRating}
        <img src={ratingStar} alt="star" className="w-4 h-4" />
      </p>
      <p>{totalRatingsString}</p>
     
      <p>{sla.slaString}</p>
    </div>
  );
  
} 
export default RestaurantCard;