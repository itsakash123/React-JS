import { useState } from "react";
import ReastaurantCard from "../ReastaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState(resList);

  const handleTopRatedFilter = () => {
    const filterList = ListOfRestaurants.filter(
      (res) => res.card.card.info.avgRating >= 4.3
    );
    setListOfRestaurant(filterList);
  };

  const handleResetFilter = () => {
    setListOfRestaurant(resList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          ⭐ Top Rated (4.3+)
        </button>
        <button className="filter-btn" onClick={handleResetFilter}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <ReastaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
