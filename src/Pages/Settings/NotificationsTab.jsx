import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";

const NotificationsTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 text-[#32475CDE] tablet:p-6 rounded-lg shadow-lg'>
                <h1 className="text-[1.25rem] mt-4 mb-2 leading-normal font-bold">
                    Recent Devices
                </h1>

                <p className='text-[#32475C99] font-semibold mt-4'>
                    We need permission from your browser to show notifications. <a className='link link-hover font-semibold text-[#3C1450]'>Request Permission</a>
                </p>

                <div className="mt-8">
                    {/* <form
                        className="mt-8 grid grid-cols-6 gap-6">
                    </form> */}

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left text-[#181336] dark:text-gray-400">
                            {/* Table header */}
                            <thead className="text-xs text-[#7C8493] dark:bg-[#EEF2F7] dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                        ✉️  Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                        🖥️ Browser
                                    </th>
                                </tr>
                            </thead>
                            {/* end of Table header) */}

                            {/* Table body */}
                            <tbody className='border'>
                                <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        New for you
                                    </td>
                                    <th scope="row" className="px-6 font-semibold text-[0.8375rem] py-4 whitespace-nowrap dark:text-white">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            defaultChecked
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </th>
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        Account activity
                                    </td>
                                    <th scope="row" className="px-6 font-semibold text-[0.8375rem] py-4 whitespace-nowrap dark:text-white">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </th>
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            defaultChecked
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        A new browser used to sign in
                                    </td>
                                    <th scope="row" className="px-6 font-semibold text-[0.8375rem] py-4 whitespace-nowrap dark:text-white">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            defaultChecked
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </th>
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            defaultChecked
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        A new device is linked
                                    </td>
                                    <th scope="row" className="px-6 font-semibold text-[0.8375rem] py-4 whitespace-nowrap dark:text-white">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </th>
                                    <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                        <input
                                            type="checkbox"
                                            id="deactivate"
                                            name="deactivate-button"
                                            defaultChecked
                                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-6 grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3 space-y-4'>
                            <label className='text-[#32475C99] font-semibold'>
                                When should we send you notifications?
                            </label>
                            <select name="notifications" id="notifications"
                                className='block w-full text-base rounded-lg'>
                                <option value="online-only">Only when I'm online</option>
                                <option value="online-and-offline">Online and offline</option>
                            </select>
                        </div>
                    </div>

                    <span className='flex mt-4 sm:items-center gap-4'>
                        <button type='submit'
                            className=" px-4 py-3 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                            Save Changes
                        </button>
                        <button type='reset'
                            className=" px-4 py-3 uppercase rounded-md border border-[#8592A3] bg-white text-sm font-medium text-[#8592A3] transition hover:border-[#3C1450] hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                            Cancel
                        </button>
                    </span>



                </div>

            </div>

        </section>
    )
}

export default NotificationsTab