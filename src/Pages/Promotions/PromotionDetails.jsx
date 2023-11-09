import React from 'react'
import { Link } from 'react-router-dom'
import { PromotionDetailsData } from '../../Components/Main/content';

import { BiArrowBack } from "react-icons/bi";

const PromotionDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mb-4 flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/promotions">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Promotion Details
                    </h1>
                </span>

                <div className='bg-white my-8 py-8 rounded-lg shadow-lg '>

                    <div className='border border-x-transparent py-4'>
                        {PromotionDetailsData.map((item, index) => (
                            <div key={index}
                                className=' py-4 px-8 grid gap-4 laptop:grid-cols-3 grid-cols-2'>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Title
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.title}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Description
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.description}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Amount
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.amount}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Condition
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.condition}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Start Date
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.startDate}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            End Date
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.endDate}
                                        </p>
                                    </span>
                                </div>


                            </div>

                        ))}
                        <span className='flex justify-between gap-6 px-8 mt-4'>
                            <button type="button"
                                className=" px-4 py-3 rounded-md border border-[#E93C3C] bg-[#E93C3C] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring active:text-[#E93C3C]">
                                Disaprove promo request
                            </button>
                            <button type="button"
                                className=" px-4 py-3 rounded-md border border-[#40DD7F] bg-[#40DD7F] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#40DD7F] focus:outline-none focus:ring active:text-[#40DD7F]">
                                Approve promo request
                            </button>
                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default PromotionDetails