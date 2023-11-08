import React from 'react'
import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

const BonusTab = () => {
    return (
        <section>
            <div className='bg-white py-8 px-4 rounded-b-lg shadow-lg'>

                <div className='px-4'>
                    <span className='space-y-2'>
                        <h1 className="text-lg text-[#2E2E3A] leading-normal font-bold">
                            Bonus Balance
                        </h1>
                        <h1 className="text-[2rem] text-[#2AC769] leading-normal font-bold">
                            ₦10,000.00
                        </h1>
                    </span>

                    <div className='mt-10 space-y-4 laptop:w-1/2 border px-3 py-6 rounded-lg'>
                        <div className='flex justify-between mt-4 mb-8'>
                            {/* search bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search"
                                    className="w-full rounded-md border-[#D6DDEB] py-3.5 pe-10 shadow-sm sm:text-sm"
                                />
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button">
                                        <GoSearch />
                                    </button>
                                </span>
                            </div>
                            {/* end of search bar */}
                            <button className='btn rounded-none normal-case bg-transparent hover:bg-transparent text-[1rem] text-[#202430] border border-[#D6DDEB] font-bold'>
                                <BsFilter className='h-5 w-5' />
                                filter
                            </button>
                        </div>

                        <div className='flex justify-between'>
                            <span className='flex gap-4'>
                                <span className='bg-[#EDEFF2] rounded-full p-4'>
                                    <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                                </span>
                                <span className='space-y-2'>
                                    <p className=' text-[#242F57] font-semibold'>
                                        Deposit
                                    </p>
                                    <p className='text-[#32475C99] text-sm'>
                                        Bonus
                                    </p>
                                </span>
                            </span>
                            <span className='text-right'>
                                <p className=' text-[#2AC769] text-lg font-semibold'>
                                    +₦5,000
                                </p>
                                <p className='text-[#32475C99]'>
                                    Today 11:32:40pm
                                </p>
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='flex gap-4'>
                                <span className='bg-[#EDEFF2] rounded-full p-4'>
                                    <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                                </span>
                                <span className='space-y-2'>
                                    <p className=' text-[#242F57] font-semibold'>
                                        Deposit
                                    </p>
                                    <p className='text-[#32475C99] text-sm'>
                                        Bonus
                                    </p>
                                </span>
                            </span>
                            <span className='text-right'>
                                <p className=' text-[#2AC769] text-lg font-semibold'>
                                    +₦5,000
                                </p>
                                <p className='text-[#32475C99]'>
                                    Today 11:32:40pm
                                </p>
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='flex gap-4'>
                                <span className='bg-[#EDEFF2] rounded-full p-4'>
                                    <AiOutlineFall className="h-5 w-5 text-[#ED342B]" />
                                </span>
                                <span className='space-y-2'>
                                    <p className=' text-[#242F57] font-semibold'>
                                        Withdrawal
                                    </p>
                                    <p className='text-[#32475C99] text-sm'>
                                        Bonus
                                    </p>
                                </span>
                            </span>
                            <span className='text-right'>
                                <p className=' text-[#ED342B] text-lg font-semibold'>
                                    +₦5,000
                                </p>
                                <p className='text-[#32475C99]'>
                                    Today 11:32:40pm
                                </p>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}

export default BonusTab