import { CDN_URL } from "./utils/constants";
//props is jS object
const ReastaurantCard = (props) => {
  const { resData } = props; //resData is the key
  const { cloudinaryImageId, name, costForTwo, cuisines ,avgRating} = resData?.card.card.info;
   const styleCard = {
     backgroundColor: "#f0f0f0",
   };
  return (
    <div className="res-Card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <h3>{name}</h3>
      <h4> Rs {costForTwo}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} 🌟</h4>
    </div>
  );
};
export default ReastaurantCard;
