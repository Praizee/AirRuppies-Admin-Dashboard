import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";

const TierTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 text-[#32475CDE] tablet:p-6 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 leading-normal font-bold">
                    Tier Settings
                </h1>

                <div className="">
                    <form
                        className="mt-8 grid grid-cols-6 gap-6">

                        <div className='col-span-6 sm:col-span-3 space-y-1'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Type of Tier
                            </label>
                            <select name="notifications" id="notifications"
                                className='block text-base w-full rounded-lg'>
                                <option value="tier-1">Tier 1</option>
                                <option value="tier-2">Tier 2</option>
                                <option value="tier-3">Tier 3</option>
                                <option value="tier-4">Tier 4</option>
                            </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3 space-y-4'>

                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="minimim-amount"
                                className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="minimum-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Minimum Transfer Amount"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Minimum Transfer Amount
                                </span>
                            </label>
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-daily-amount"
                                className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="maximum-daily-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Maximum Daily Transfer"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Maximum Daily Transfer
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-monthly-amount"
                                className="relative block rounded-md border
                             border-gray-200 shadow-sm focus-within:border-blue-600 
                             focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="maximum-monthly-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Maximum Transfer Amount Monthly"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                                top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                                text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                                peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Maximum Transfer Amount Monthly
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 flex space-x-6">
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
        </section>
    )
}

export default TierTab