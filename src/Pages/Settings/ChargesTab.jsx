import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";

const ChargesTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 text-[#32475CDE] tablet:p-6 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 leading-normal font-bold">
                    Charges Setting
                </h1>

                <div className="">
                    <form className="mt-8 grid grid-cols-6 gap-6">

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Type of Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="bank-charges">Bank Charges</option>
                            </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Bank Charges
                            </label>
                            <select name="transfer" id="transfer"
                                className='block w-full text-base rounded-lg'>
                                <option value="transfer">Transfer</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-daily-amount"
                                className="relative block rounded-md border
                         border-gray-200 shadow-sm focus-within:border-[#551B73] 
                         focus-within:ring-1 focus-within:ring-[#551B73]"
                            >
                                <input
                                    type="text"
                                    id="maximum-daily-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Amount"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                            top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                            text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                            peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Amount
                                </span>
                            </label>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                        </div>

                        {/* 02 */}

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Type of Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="sms-charges">SMS Charges</option>
                            </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                SMS Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="transfer">OTP Charges</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-daily-amount"
                                className="relative block rounded-md border
                         border-gray-200 shadow-sm focus-within:border-[#551B73] 
                         focus-within:ring-1 focus-within:ring-[#551B73]"
                            >
                                <input
                                    type="text"
                                    id="maximum-daily-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Amount"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                            top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                            text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                            peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Amount
                                </span>
                            </label>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                        </div>

                        {/* 03 */}

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Type of Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="bill-payment-charges">Bill Payment Charges</option>
                            </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Bill Payment Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="airtime-charges">Airtime Charges</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-daily-amount"
                                className="relative block rounded-md border
                         border-gray-200 shadow-sm focus-within:border-[#551B73] 
                         focus-within:ring-1 focus-within:ring-[#551B73]"
                            >
                                <input
                                    type="text"
                                    id="maximum-daily-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Amount"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                            top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                            text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                            peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Amount
                                </span>
                            </label>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                        </div>

                        {/* 04 */}

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='text-[#32475C99] text-xs font-semibold'>
                                Type of Charges
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="maintenance-charges">Maintenance Charges</option>
                            </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="maximum-daily-amount"
                                className="relative block rounded-md border
                         border-gray-200 shadow-sm focus-within:border-[#551B73] 
                         focus-within:ring-1 focus-within:ring-[#551B73]"
                            >
                                <input
                                    type="text"
                                    id="maximum-daily-amount"
                                    defaultValue="N 50,0000"
                                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Amount"
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 
                            top-0 -translate-y-1/2 bg-white p-0.5 text-xs 
                            text-gray-700 transition-all peer-placeholder-shown:top-1/2 
                            peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Amount
                                </span>
                            </label>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
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
        </section>
    )
}

export default ChargesTab