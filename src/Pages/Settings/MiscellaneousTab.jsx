import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";
import TimeLine from '../../Components/Timeline/TimeLine';
import RecentDevices from '../../Components/RecentDevices/RecentDevices';

const MiscellaneousTab = () => {
    return (
        <section>
            <div className='bg-white my-8 px-4 py-8 text-[#32475CDE] p-6 rounded-lg shadow-lg'>

                <h1 className='font-black text-[1.25rem] mb-6'>
                    Admin Activity Timeline
                </h1>

                <TimeLine />
            </div>

            <div className='bg-white my- text-[#32475CDE] rounded-lg shadow-lg'>

                <span className='px-4 py-8'>
                    <h1 className='font-black px-6 py-2 text-[1.25rem]'>
                        Recent Devices
                    </h1>
                </span>

                <RecentDevices />
            </div>

        </section>
    )
}

export default MiscellaneousTab