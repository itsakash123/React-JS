import { CDN_URL } from "./utils/constants";

const ReastaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } = resData?.card.card.info;

  return (
    <div className="res-Card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 2).join(", ")}</h4>
      <h4>₹ {costForTwo}</h4>
      <h4>⭐ {avgRating}</h4>
    </div>
  );
};

export default ReastaurantCard;
