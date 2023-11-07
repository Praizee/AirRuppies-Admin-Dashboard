import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";
import { AiOutlineClose } from "react-icons/ai";

const MaintenanceTab = () => {
    return (
        <section>
            <div className='bg-white flex justify-between my-8 px-4 py-8 text-[#32475CDE] tablet:p-6 rounded-lg shadow-lg'>
                <h1 className="text-base mt-4 mb-2 leading-normal font-bold">
                    Maintenance Mode
                </h1>
                <label
                    htmlFor="AcceptConditions"
                    className="relative h-6 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                >
                    <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

                    <span
                        className="absolute inset-0 rounded-full bg-transparent border border-gray-300 peer-checked:border-none transition peer-checked:bg-[#636dfe]"
                    ></span>

                    <span
                        className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-gray-300 peer-checked:bg-white transition-all peer-checked:start-6"
                    ></span>
                </label>
            </div>

        </section>
    )
}

export default MaintenanceTab