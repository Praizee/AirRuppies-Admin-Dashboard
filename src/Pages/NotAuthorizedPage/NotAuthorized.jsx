import React from 'react'
import { Link } from "react-router-dom";
import LaptopGirl from "../../../src/assets/girl-with-laptop-light.png"

const NotAuthorized = () => {
    return (
        <div className='w-full'>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        You are not authorized! 🔐
                    </p>

                    <p className="mt-4 text-gray-500">
                        You don’t have permission to access this page. Go Home!
                    </p>

                    <img src={LaptopGirl} className='w-[90%] mt-4 mx-auto' />

                    <Link to="/" className="btn mt-10 text-white hover:bg-[#3C1450] normal-case font-medium border-none bg-[#3C1450]/90 ">Go Back Home</Link>

                </div>
            </div>

        </div>
    )
}

export default NotAuthorized