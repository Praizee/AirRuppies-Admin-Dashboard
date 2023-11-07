import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Avatar from "../../assets/Settings-Avatar.png";
import GirlIllustration from "../../assets/girl-illustration.png";
import Alerts from "../../Components/Alerts/Alerts.jsx";


const SecurityTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 text-[#32475CDE] tablet:p-6 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 leading-normal font-bold">
                    Change Password
                </h1>

                <div className="">
                    <form
                        className="mt-8 grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="newPassword"
                                className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="New Password"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    New Password
                                </span>
                            </label>
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="confirmPassword"
                                className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Confirm Password"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Confirm Password
                                </span>
                            </label>
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

                        <div className='col-span-6'>
                            <h2 className="text-[1rem] text-[#32475C99] mt-4 mb-2 leading-normal font-bold">
                                Password Requirements:
                            </h2>

                            <ul className='list-disc px-4 space-y-4'>
                                <li className='text-[#32475C99]'>
                                    Minimum 8 characters long - the more, the better
                                </li>
                                <li className='text-[#32475C99]'>
                                    At least one lowercase character
                                </li>
                                <li className='text-[#32475C99]'>
                                    At least one number, symbol, or whitespace character
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
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
                    Two-step verification
                </h1>

                <span className='space-y-4'>
                    <p className='text-[#32475C99]'>
                        Two factor authentication is not enabled yet.
                    </p>
                    <p className='text-[#32475C99]'>
                        Two-factor authentication adds an additional
                        layer of security to your account by requiring
                        more than just a password to
                        log in. <a className='link link-hover text-blue-500'>Learn more</a>.
                    </p>
                </span>

                <button type="button"
                    className=" px-4 py-3 my-4 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                    Enable two-factor authentication
                </button>
            </div>

            <div className='bg-white my-8 p-4 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Authorization pin change
                </h1>

                <div className='flex mt- justify-betwee'>
                    <div className='space-y-4 mt-12 w-full'>
                        <label
                            htmlFor="currentPin"
                            className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="password"
                                id="currentPin"
                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Current Pin"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Current Pin
                            </span>
                        </label>

                        <label
                            htmlFor="newPin"
                            className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="password"
                                id="newPin"
                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="New Pin"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                New Pin
                            </span>
                        </label>

                        <button type="button" disabled={true}
                            className=" px-16 py-3 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                            save Changes
                        </button>
                    </div>

                    <img src={GirlIllustration} className='hidden laptop:block laptop:px-20 tablet:px-8' alt='girl-illustration' />
                </div>

            </div>

        </section>
    )
}

export default SecurityTab