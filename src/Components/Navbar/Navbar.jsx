import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.js';
import { Dropdown } from 'flowbite-react';
import Avatar from "../../assets/Avatar.png";
import AppLogo from "../../assets/App Logo.png";

import { FiMenu } from "react-icons/fi";
import { LuBell, LuSun, LuMoon, LuLogOut } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";



const Navbar = ({ toggleSidebar }) => {
  const { user } = useAppContext(); // Use the user state from the context
  const navigate = useNavigate();
  // logout
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }
  // end of logout

  return (
    <div className="navbar bg-white border-2 border-t-transparent fixed py-4 top-0 z-[100]">
      <div className="flex-1 laptop:mx-[rem] mx-">
        <div className="flex-none">
          {/* Button to toggle the sidebar (hidden on wider screens) */}
          <button className="btn btn-square btn-ghost laptop:hidden" onClick={toggleSidebar}>
            <FiMenu size={25} /> {/* Hamburger menu icon */}
          </button>
        </div>

        <div className="flex-1 mx-1">
          <a className="leading-[1.5rem] text-black font-black text-[1.5rem]">
            <img src={AppLogo} alt="Web-Logo" className="" />
            <p className="sr-only">Logo</p>
          </a>
        </div>
      </div>

      {/* search bar */}
      <div className="relative hidden laptop:block flex-1 rounded-md shadow-md">
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

        {/* notification dropdown */}
        <Dropdown
          className="mt-2 right-0 text-[#32475CDE] w-[20rem]"
          label="" dismissOnClick={false} renderTrigger={() =>
            <button className="btn btn-ghost btn-circle" title="Notifications">
              <div className="indicator">
                <LuBell size={23} /> {/* Bell icon */}
                <span className="badge badge-xs bg-[#FF3E1D] py-1 text-[0.625rem] text-white indicator-item">
                </span>
              </div>
            </button>
          }>
          <Dropdown.Item className="flex justify-between">
            <p className="font-bold">
              Notifications
            </p>
            <p className="text-[#696CFF] bg-[#666CFF1F]/10 px-2 py-1 rounded-lg">
              8 New
            </p>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="inline-block">
            <p className="font-bold text-left">
              Congratulations
            </p>
            <span className="flex mt-2 justify-between">
              <p className="text-[0.75rem]">
                A new customer just onboarding on app
              </p>
              <p className="text-[0.75rem]">
                Today
              </p>
            </span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="inline-block">
            <p className="font-bold text-left">
              New user registered.
            </p>
            <span className="flex mt-2 justify-between">
              <p className="text-[0.75rem]">
                5 hours ago
              </p>
              <p className="text-[0.75rem]">
                Yesterday
              </p>
            </span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="inline-block">
            <p className="font-bold text-left">
              New message received 👋
            </p>
            <span className="flex mt-2 justify-between">
              <p className="text-[0.75rem]">
                You have 10 unread messages
              </p>
              <p className="text-[0.75rem]">
                11 Aug
              </p>
            </span>
          </Dropdown.Item>
        </Dropdown>

        {/* profile picture dropdown */}
        <div className="text-[#32475CDE]">
          <span className="hidden md:flex mx-4 gap-2 justify-between">
            <Dropdown
              className="mt-2 right-0 select-none"
              label="" dismissOnClick={false} renderTrigger={() =>
                <span className="py-1">
                  <img src={Avatar} alt="User-pic" className="select-none" title="Profile" /> {/* User profile picture */}
                </span>
              }>
              <Dropdown.Header className="flex gap-4">
                <img src={Avatar} alt="User-pic" className="" title="Profile" /> {/* User profile picture */}
                <span>
                  <span className="block text-sm font-bold">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    Admin
                  </span>
                </span>
              </Dropdown.Header>
              <Link to="profile">
                <Dropdown.Item icon={BiUser}>Profile</Dropdown.Item>
              </Link>
              <Link to="settings">
                <Dropdown.Item icon={IoSettingsOutline}>Settings</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} icon={LuLogOut}>Logout</Dropdown.Item>
            </Dropdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
