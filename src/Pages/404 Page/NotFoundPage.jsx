import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css"
import PageNotFound from "../../../src/assets/404-page-not-found.png"

const NotFoundPage = () => {
    return (
        <div className='w-full'>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Page Not Found ⚠️
                    </p>

                    <p className="mt-4 text-gray-500">
                        we couldn't find the page you are looking for
                    </p>

                    <img src={PageNotFound} className='w-[90%] mx-auto' />

                    <Link to="/" className="btn mt-10 text-white hover:bg-[#010886] normal-case font-medium border-none bg-[#010886]/90 ">Go Back Home</Link>

                </div>
            </div>

        </div>
    )
}

export default NotFoundPage