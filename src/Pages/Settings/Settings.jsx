import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";


const Settings = () => {
    const { user } = useAppContext();

    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Settings
                </h1>


            </div>
        </div>
    )
}

export default Settings
