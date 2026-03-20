import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import foodImage from "url:./src/assets/foodImage.png";
import searchLogo from "url:./src/assets/search.png";
import cartLogo from "url:./src/assets/cart.png";
const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm px-6 md:px-14 py-3 flex items-center justify-between sticky top-0 z-50">
      
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          alt="logo"
        />
        <h1 className="font-bold text-lg text-gray-900">grapeslab</h1>
      </div>

      
      <ul className="hidden md:flex gap-8 text-sm text-black">
        <li className="hover:text-green-700 cursor-pointer">Menu</li>
        <li className="hover:text-green-700 cursor-pointer">Offers</li>
        <li className="hover:text-green-700 cursor-pointer">Foods</li>
        <li className="hover:text-green-700 cursor-pointer">Services</li>
        <li className="hover:text-green-700 cursor-pointer">Restaurants</li>
      </ul>

      
      <div className="flex items-center gap-3">
        {/* Online Button */}
        <button className="inline-flex items-center gap-2 bg-green-50 border border-green-700 hover:border-green-500 hover:shadow-[0_0_0_3px_rgba(134,239,172,0.25)] text-green-700 font-semibold text-sm px-4 py-2 rounded-full cursor-default transition-all duration-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-700"></span>
          </span>
          Online
        </button>

        {/* Cart Button */}
        <button className="relative inline-flex items-center justify-center w-10 h-10 bg-[#6b9e8f] hover:bg-[#5a8d7e] rounded-full transition-all duration-150 active:scale-95">
          <img className="w-5 h-5" src={cartLogo} alt="" />
        </button>
      </div>
    </div>
  );
};



const Body = () => {
  const [location, setLocation] = useState("Sylhet, Bangladesh");

  return (
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

        {/* Subtext */}
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md font-medium">
          Order from 500+ top-rated restaurants near you and get fresh, hot
          meals delivered to your door in 30 minutes or less.
        </p>

        {/* Location input */}
        <div className="flex items-center bg-white rounded-full px-6 py-3.5 mb-6 w-full max-w-lg shadow-sm border border-gray-100">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 text-base font-medium placeholder:text-gray-400"
            placeholder="Enter your location..."
          />
          <button className="ml-3 text-[#4a7c5e] hover:text-[#3a6b4e] transition-colors">
            <img className="w-7 h-7"src={searchLogo} alt="" />
          </button>
        </div>

        {/* CTA Buttons */}
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

      {/* RIGHT — Your downloaded image */}
      <div className="absolute right-0 top-0 h-[90%] w-[55%] z-10 pointer-events-none">
        <img
          src={foodImage}
          alt="Food presentation"
          className="w-full h-full object-contain object-center"
        />
      </div>
    </div>
  );
};

  







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
