import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";
import Avatar from "../../assets/Settings-Avatar.png";
import BasicDatePicker from '../../Components/DatePicker/DatePicker';

const AccountsTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 tablet:p-6 rounded-lg shadow-lg'>

                <div className='flex'>
                    <img src={Avatar} alt="User-pic" className="" title="Profile" /> {/* User profile picture */}
                    <span className='space-y-6 p-4'>
                        <label htmlFor='file'
                            className="p-3 uppercase cursor-pointer rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                            Upload new photo
                            <input type="file" id="file" name="myImage"
                                accept="image/png, image/gif, image/jpeg"
                                className='hidden'
                            />
                        </label>

                        <p className='text-[0.8rem] text-[#32475C99]'>
                            Allowed JPG, GIF or PNG. Max size of 800KB
                        </p>
                    </span>
                </div>

                <div className="">
                    <form
                        className="mt-8 grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="firstName"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="firstName"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="First Name"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    First Name
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="lastName"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="lastName"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Last Name"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Last Name
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="email"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="email"
                                    id="email"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Email"
                                    required
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Email
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="phoneNumber"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Phone Number"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Phone Number
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="nationality"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="nationality"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Nationality"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nationality
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <BasicDatePicker />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="roles"
                                className="relative block rounded-md border
                                 border-gray-200 shadow-sm focus-within:border-blue-600 
                                 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="roles"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Roles"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                    top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                    text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                    peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Roles
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 tablet:flex sm:items-center space-x-4">
                            <button type='submit'
                                className=" px-4 py-3 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                                Save Changes
                            </button>
                            <button type='reset'
                                className=" px-4 py-3 uppercase rounded-md border border-[#8592A3] bg-white text-sm font-medium text-[#8592A3] transition hover:border-[#3C1450] hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <div className='bg-white my-8 p-4 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Deactivate Account
                </h1>

                <label htmlFor="deactivate" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="deactivate"
                        name="deactivate-button"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-[#3A3541DE] font-medium">
                        I confirm my account deactivation
                    </span>
                </label>

                <button type="button" disabled={true}
                    className=" px-4 py-3 my-4 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                    deactivate account
                </button>

            </div>
        </section>
    )
}

export default AccountsTab