import React from 'react'
import { Link } from 'react-router-dom'
import { UtilityDetailsData } from '../../../Components/Main/content';

import { BiArrowBack } from "react-icons/bi";

const UtilityDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className='flex justify-between'>
                    <h1 className="text-[1.5rem] mb-4 flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/bill-payment/utility">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Utility Details
                    </h1>

                </span>

                <div className='bg-white my-8 py-8 rounded-lg shadow-lg '>

                    <div className='border border-x-transparent py-4'>
                        {UtilityDetailsData.map((item, index) => (
                            <div key={index}
                                className='border border-x-transparent py-4 px-8 grid gap-4 laptop:grid-cols-3 grid-cols-2'>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Transaction Type
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.transactionType}
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
                                            Date
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.date}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Smart Customer iD
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.smartCustomerID}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Phone number
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.phoneNumber}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Time
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.time}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Account Name
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.accountName}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default UtilityDetails