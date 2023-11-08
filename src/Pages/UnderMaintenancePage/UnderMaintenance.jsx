import React from 'react'
import { Link } from "react-router-dom";
import YogaGirl from "../../../src/assets/girl-doing-yoga-light.png"

const UnderMaintenance = () => {
    return (
        <div className='w-full'>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Under Maintenance! 🚧
                    </p>

                    <p className="mt-4 text-gray-500">
                        Sorry for the inconvenience but we're performing some maintenance at the moment
                    </p>

                    <img src={YogaGirl} className='w-[70%] mx-auto' />

                    <Link to="/dashboard" className="btn mt-10 text-white hover:bg-[#3C1450] normal-case font-medium border-none bg-[#3C1450]/90 ">Go Back Home</Link>

                </div>
            </div>

        </div>
    )
}

export default UnderMaintenance