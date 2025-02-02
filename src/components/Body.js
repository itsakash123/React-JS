import { useState } from "react";
import ReastaurantCard from "../ReastaurantCard";
import resList from "../utils/mockData";


//not using keys(not acceptable) <<index as key<< unique key(best practice)
const Body = () => {
  // Local State Variable->Super Powerful Variable->For that we use React Hooks i.e useState()
  const [ListOfRestaurants,setListOfRestaurant] = useState(resList);

  //Normal JS variables
  // let ListOfRestaurants = []


 
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           
            const filterList = ListOfRestaurants.filter(
              (res) => res.card.card.info.avgRating< 4.3
            );
             setListOfRestaurant(filterList);
            
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map(
          (
            restaurant // you have to always give a key during mapping so that it will not render every restaurant card
          ) => (
            <ReastaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
