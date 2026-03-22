import cartLogo from "url:../assets/cart.png";
import { APP_LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm px-6 md:px-14 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src={APP_LOGO}
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
       
        <button className="inline-flex items-center gap-2 bg-green-50 border border-green-700 hover:border-green-500 hover:shadow-[0_0_0_3px_rgba(134,239,172,0.25)] text-green-700 font-semibold text-sm px-4 py-2 rounded-full cursor-default transition-all duration-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-700"></span>
          </span>
          Online
        </button>

       
        <button className="relative inline-flex items-center justify-center w-10 h-10 bg-[#6b9e8f] hover:bg-[#5a8d7e] rounded-full transition-all duration-150 active:scale-95">
          <img className="w-5 h-5" src={cartLogo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;