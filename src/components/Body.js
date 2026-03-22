import searchLogo from "url:../assets/search.png";
import foodImage from "url:../assets/foodImage.png";
import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";  
const Body = () => {
  const [location, setLocation] = useState("Bareilly, Uttar Pradesh, India");

  return (
    <div>
      <div className="w-full min-h-screen bg-[#e1e7d9] relative overflow-hidden flex items-center">
        <div className="relative z-20 px-16 py-20 max-w-2xl">
          <div className="absolute -top-8 -left-6 w-14 h-20 bg-[#4a7c5e] rounded-full opacity-90 rotate-[-20deg]" />

          <h1 className="text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            Craving Something?
            <br />
            We've Got
            <br />
            You Covered.
          </h1>

          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md font-medium">
            Order from 500+ top-rated restaurants near you and get fresh, hot
            meals delivered to your door in 30 minutes or less.
          </p>

          <div className="flex items-center bg-white rounded-full px-6 py-3.5 mb-6 w-full max-w-lg shadow-sm border border-gray-100">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 text-base font-medium placeholder:text-gray-400"
              placeholder="Enter your location..."
            />
            <button className="ml-3 text-[#4a7c5e] hover:text-[#3a6b4e] transition-colors">
              <img className="w-7 h-7" src={searchLogo} alt="" />
            </button>
          </div>

          <div className="flex items-center gap-5">
            <button className="bg-[#4a7c5e] hover:bg-[#3a6b4e] text-white font-semibold text-base px-10 py-3.5 rounded-full transition-all duration-150 active:scale-95 shadow-md">
              Delivery
            </button>
            <span className="text-gray-500 font-medium">Or</span>
            <button className="bg-transparent border-2 border-[#4a7c5e] hover:bg-[#4a7c5e] hover:text-white text-[#4a7c5e] font-semibold text-base px-10 py-3.5 rounded-full transition-all duration-200 active:scale-95">
              Pick Up
            </button>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-[90%] w-[55%] z-10 pointer-events-none">
          <img
            src={foodImage}
            alt="Food presentation"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
      <div className=" m-15">
        <div className="mb-20 w-[60%]">
          <div className=" flex items-center bg-white rounded-full px-2 py-2  shadow-sm border border-gray-100">
            <img className=" w-5 h-5 mr-3" src={searchLogo} alt="logo" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish "
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="bg-[#4a7c5e] hover:bg-[#3a6b4e] text-white font-semibold text-base px-5 py-2 rounded-full transition-all duration-150 active:scale-95 shadow-md">
              Search
            </button>
          </div>
        </div>
        <div className=" flex flex-wrap items-center gap-6 ">
          {resList.map((restaurant)=>(
             <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;