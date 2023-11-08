import React from 'react'
import { Link } from "react-router-dom";
import ErrorImage from "../../../src/assets/404-page-not-found.png"

const ServerError = () => {
    return (
        <div className='w-full'>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Internal server error 🔐
                    </p>

                    <p className="mt-4 text-gray-500">
                        Oops something went wrong.
                    </p>

                    <img src={ErrorImage} className='w-[90%] mx-auto' />

                    <Link to="/" className="btn mt-10 text-white hover:bg-[#3C1450] normal-case font-medium border-none bg-[#3C1450]/90 ">Go Back Home</Link>

                </div>
            </div>

        </div>
    )
}

export default ServerError