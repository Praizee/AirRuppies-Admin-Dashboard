import React from "react";
import { FiMenu } from "react-icons/fi";
import { LuBell, LuSun, LuMoon } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import Avatar from "../../assets/Avatar.png";
import AppLogo from "../../assets/App Logo.png";
import { useAppContext } from "../../Context/AppContext";


const Navbar = ({ toggleSidebar }) => {
  const { user } = useAppContext(); // Use the user state from the context

  return (
    <div className="navbar bg-white border-2 border-t-transparent fixed py-4 top-0 z-[100]">
      <div className="flex-1 laptop:mx-[rem] mx-">
        <div className="flex-none">
          {/* Button to toggle the sidebar */}
          <button className="btn btn-square btn-ghost laptop:hidden" onClick={toggleSidebar}>
            <FiMenu size={25} /> {/* Hamburger menu icon */}
          </button>
        </div>

        <div className="flex-1 mx-1">
          <a className="leading-[1.5rem] text-black font-black text-[1.5rem]">
            <img src={AppLogo} alt="Web-Logo" className="" />
          </a>
        </div>
      </div>

      {/* search bar */}
      <div className="relative hidden laptop:block flex-1 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
        <label htmlFor="Search" className="sr-only"> Search </label>

        <input
          type="text"
          id="Search"
          placeholder="Search"
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 px-3 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 border border-y-transparent border-r-transparent rounded-r-md p-3 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <GoSearch />
          </button>
        </span>
      </div>
      {/* end of search bar */}

      <div className="navbar-end gap-">
        <div className="gap-[0.05rem]">
          {/* Buttons for various actions */}
          <button className="btn btn-ghost btn-circle" title="Switch Dark Mode">
            <LuMoon size={23} /> {/* Moon icon */}
          </button>
          {/* remove 'hidden' when dark/light mode functionality is implemented */}
          <button className="btn hidden btn-ghost btn-circle" title="Switch Light Mode">
            <LuSun size={23} /> {/* Sun icon */}
          </button>
        </div>

        <button className="btn btn-ghost btn-circle" title="Notifications">
          <div className="indicator">
            <LuBell size={23} /> {/* Bell icon */}
            <span className="badge badge-xs bg-[#FF3E1D] py-1 text-[0.625rem] text-white indicator-item">

            </span>
          </div>
        </button>

        <div className="">
          <span className="hidden md:flex mx-4 gap-2 justify-between">
            <span className="py-1">
              <img src={Avatar} alt="User-pic" className="" title="Profile" /> {/* User profile picture */}
            </span>
          </span>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
